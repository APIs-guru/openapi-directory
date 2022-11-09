import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { Expr } from "./expr";
import { FeedOutputConfig } from "./feedoutputconfig";

export enum FeedContentTypeEnum {
    ContentTypeUnspecified = "CONTENT_TYPE_UNSPECIFIED"
,    Resource = "RESOURCE"
,    IamPolicy = "IAM_POLICY"
,    OrgPolicy = "ORG_POLICY"
,    AccessPolicy = "ACCESS_POLICY"
,    OsInventory = "OS_INVENTORY"
,    Relationship = "RELATIONSHIP"
}


// Feed
/** 
 * An asset feed used to export asset updates to a destinations. An asset feed filter controls what updates are exported. The asset feed must be created within a project, organization, or folder. Supported destinations are: Pub/Sub topics.
**/
export class Feed extends SpeakeasyBase {
  @Metadata({ data: "json, name=assetNames" })
  assetNames?: string[];

  @Metadata({ data: "json, name=assetTypes" })
  assetTypes?: string[];

  @Metadata({ data: "json, name=condition" })
  condition?: Expr;

  @Metadata({ data: "json, name=contentType" })
  contentType?: FeedContentTypeEnum;

  @Metadata({ data: "json, name=feedOutputConfig" })
  feedOutputConfig?: FeedOutputConfig;

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=relationshipTypes" })
  relationshipTypes?: string[];
}
