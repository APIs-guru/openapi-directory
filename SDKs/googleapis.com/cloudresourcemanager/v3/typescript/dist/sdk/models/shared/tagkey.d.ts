import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare enum TagKeyPurposeEnum {
    PurposeUnspecified = "PURPOSE_UNSPECIFIED",
    GceFirewall = "GCE_FIREWALL"
}
/**
 * A TagKey, used to group a set of TagValues.
**/
export declare class TagKey extends SpeakeasyBase {
    createTime?: string;
    description?: string;
    etag?: string;
    name?: string;
    namespacedName?: string;
    parent?: string;
    purpose?: TagKeyPurposeEnum;
    purposeData?: Map<string, string>;
    shortName?: string;
    updateTime?: string;
}
