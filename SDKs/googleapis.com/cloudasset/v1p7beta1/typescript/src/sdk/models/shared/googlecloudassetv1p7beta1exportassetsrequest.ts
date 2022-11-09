import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { GoogleCloudAssetV1p7beta1OutputConfig } from "./googlecloudassetv1p7beta1outputconfig";

export enum GoogleCloudAssetV1p7beta1ExportAssetsRequestContentTypeEnum {
    ContentTypeUnspecified = "CONTENT_TYPE_UNSPECIFIED"
,    Resource = "RESOURCE"
,    IamPolicy = "IAM_POLICY"
,    OrgPolicy = "ORG_POLICY"
,    AccessPolicy = "ACCESS_POLICY"
,    Relationship = "RELATIONSHIP"
}


// GoogleCloudAssetV1p7beta1ExportAssetsRequest
/** 
 * Export asset request.
**/
export class GoogleCloudAssetV1p7beta1ExportAssetsRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=assetTypes" })
  assetTypes?: string[];

  @Metadata({ data: "json, name=contentType" })
  contentType?: GoogleCloudAssetV1p7beta1ExportAssetsRequestContentTypeEnum;

  @Metadata({ data: "json, name=outputConfig" })
  outputConfig?: GoogleCloudAssetV1p7beta1OutputConfig;

  @Metadata({ data: "json, name=readTime" })
  readTime?: string;

  @Metadata({ data: "json, name=relationshipTypes" })
  relationshipTypes?: string[];
}
