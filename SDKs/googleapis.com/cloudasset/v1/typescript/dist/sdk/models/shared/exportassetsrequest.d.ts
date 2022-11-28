import { SpeakeasyBase } from "../../../internal/utils";
import { OutputConfig } from "./outputconfig";
export declare enum ExportAssetsRequestContentTypeEnum {
    ContentTypeUnspecified = "CONTENT_TYPE_UNSPECIFIED",
    Resource = "RESOURCE",
    IamPolicy = "IAM_POLICY",
    OrgPolicy = "ORG_POLICY",
    AccessPolicy = "ACCESS_POLICY",
    OsInventory = "OS_INVENTORY",
    Relationship = "RELATIONSHIP"
}
/**
 * Export asset request.
**/
export declare class ExportAssetsRequest extends SpeakeasyBase {
    assetTypes?: string[];
    contentType?: ExportAssetsRequestContentTypeEnum;
    outputConfig?: OutputConfig;
    readTime?: string;
    relationshipTypes?: string[];
}
