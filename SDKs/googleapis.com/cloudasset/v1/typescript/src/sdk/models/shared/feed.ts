import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Expr } from "./expr";
import { FeedOutputConfig } from "./feedoutputconfig";


export enum FeedContentTypeEnum {
    ContentTypeUnspecified = "CONTENT_TYPE_UNSPECIFIED",
    Resource = "RESOURCE",
    IamPolicy = "IAM_POLICY",
    OrgPolicy = "ORG_POLICY",
    AccessPolicy = "ACCESS_POLICY",
    OsInventory = "OS_INVENTORY",
    Relationship = "RELATIONSHIP"
}


// Feed
/** 
 * An asset feed used to export asset updates to a destinations. An asset feed filter controls what updates are exported. The asset feed must be created within a project, organization, or folder. Supported destinations are: Pub/Sub topics.
**/
export class Feed extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=assetNames" })
  assetNames?: string[];

  @SpeakeasyMetadata({ data: "json, name=assetTypes" })
  assetTypes?: string[];

  @SpeakeasyMetadata({ data: "json, name=condition" })
  condition?: Expr;

  @SpeakeasyMetadata({ data: "json, name=contentType" })
  contentType?: FeedContentTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=feedOutputConfig" })
  feedOutputConfig?: FeedOutputConfig;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=relationshipTypes" })
  relationshipTypes?: string[];
}
