import { SpeakeasyBase } from "../../../internal/utils/utils";
/**
 * A TagValue is a child of a particular TagKey. This is used to group cloud resources for the purpose of controlling them using policies.
**/
export declare class TagValue extends SpeakeasyBase {
    createTime?: string;
    description?: string;
    etag?: string;
    name?: string;
    namespacedName?: string;
    parent?: string;
    shortName?: string;
    updateTime?: string;
}
