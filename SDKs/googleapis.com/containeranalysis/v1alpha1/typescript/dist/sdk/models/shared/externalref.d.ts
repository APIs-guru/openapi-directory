import { SpeakeasyBase } from "../../../internal/utils";
export declare enum ExternalRefCategoryEnum {
    CategoryUnspecified = "CATEGORY_UNSPECIFIED",
    Security = "SECURITY",
    PackageManager = "PACKAGE_MANAGER",
    PersistentId = "PERSISTENT_ID",
    Other = "OTHER"
}
/**
 * An External Reference allows a Package to reference an external source of additional information, metadata, enumerations, asset identifiers, or downloadable content believed to be relevant to the Package
**/
export declare class ExternalRef extends SpeakeasyBase {
    category?: ExternalRefCategoryEnum;
    comment?: string;
    locator?: string;
    type?: string;
}
