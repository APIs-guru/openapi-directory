import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudAssetV1p7beta1OutputConfig } from "./googlecloudassetv1p7beta1outputconfig";


export enum GoogleCloudAssetV1p7beta1ExportAssetsRequestContentTypeEnum {
    ContentTypeUnspecified = "CONTENT_TYPE_UNSPECIFIED",
    Resource = "RESOURCE",
    IamPolicy = "IAM_POLICY",
    OrgPolicy = "ORG_POLICY",
    AccessPolicy = "ACCESS_POLICY",
    Relationship = "RELATIONSHIP"
}


// GoogleCloudAssetV1p7beta1ExportAssetsRequest
/** 
 * Export asset request.
**/
export class GoogleCloudAssetV1p7beta1ExportAssetsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=assetTypes" })
  assetTypes?: string[];

  @SpeakeasyMetadata({ data: "json, name=contentType" })
  contentType?: GoogleCloudAssetV1p7beta1ExportAssetsRequestContentTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=outputConfig" })
  outputConfig?: GoogleCloudAssetV1p7beta1OutputConfig;

  @SpeakeasyMetadata({ data: "json, name=readTime" })
  readTime?: string;

  @SpeakeasyMetadata({ data: "json, name=relationshipTypes" })
  relationshipTypes?: string[];
}
