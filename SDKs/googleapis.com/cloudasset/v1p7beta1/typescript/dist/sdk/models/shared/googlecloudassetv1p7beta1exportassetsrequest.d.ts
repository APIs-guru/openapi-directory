import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudAssetV1p7beta1OutputConfig } from "./googlecloudassetv1p7beta1outputconfig";
export declare enum GoogleCloudAssetV1p7beta1ExportAssetsRequestContentTypeEnum {
    ContentTypeUnspecified = "CONTENT_TYPE_UNSPECIFIED",
    Resource = "RESOURCE",
    IamPolicy = "IAM_POLICY",
    OrgPolicy = "ORG_POLICY",
    AccessPolicy = "ACCESS_POLICY",
    Relationship = "RELATIONSHIP"
}
/**
 * Export asset request.
**/
export declare class GoogleCloudAssetV1p7beta1ExportAssetsRequest extends SpeakeasyBase {
    assetTypes?: string[];
    contentType?: GoogleCloudAssetV1p7beta1ExportAssetsRequestContentTypeEnum;
    outputConfig?: GoogleCloudAssetV1p7beta1OutputConfig;
    readTime?: string;
    relationshipTypes?: string[];
}
