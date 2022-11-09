import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare enum IndexConfigTypeEnum {
    IndexTypeUnspecified = "INDEX_TYPE_UNSPECIFIED",
    IndexTypeString = "INDEX_TYPE_STRING",
    IndexTypeInteger = "INDEX_TYPE_INTEGER"
}
/**
 * Configuration for an indexed field.
**/
export declare class IndexConfig extends SpeakeasyBase {
    createTime?: string;
    fieldPath?: string;
    type?: IndexConfigTypeEnum;
}
