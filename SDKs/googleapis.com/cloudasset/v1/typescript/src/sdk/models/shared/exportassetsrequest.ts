import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { OutputConfig } from "./outputconfig";


export enum ExportAssetsRequestContentTypeEnum {
    ContentTypeUnspecified = "CONTENT_TYPE_UNSPECIFIED",
    Resource = "RESOURCE",
    IamPolicy = "IAM_POLICY",
    OrgPolicy = "ORG_POLICY",
    AccessPolicy = "ACCESS_POLICY",
    OsInventory = "OS_INVENTORY",
    Relationship = "RELATIONSHIP"
}


// ExportAssetsRequest
/** 
 * Export asset request.
**/
export class ExportAssetsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=assetTypes" })
  assetTypes?: string[];

  @SpeakeasyMetadata({ data: "json, name=contentType" })
  contentType?: ExportAssetsRequestContentTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=outputConfig" })
  outputConfig?: OutputConfig;

  @SpeakeasyMetadata({ data: "json, name=readTime" })
  readTime?: string;

  @SpeakeasyMetadata({ data: "json, name=relationshipTypes" })
  relationshipTypes?: string[];
}
