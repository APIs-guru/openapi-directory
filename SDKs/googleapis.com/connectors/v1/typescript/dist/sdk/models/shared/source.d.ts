import { SpeakeasyBase } from "../../../internal/utils";
export declare enum SourceSourceTypeEnum {
    SourceTypeUnspecified = "SOURCE_TYPE_UNSPECIFIED",
    ConfigVariable = "CONFIG_VARIABLE"
}
/**
 * Source to extract the backend from.
**/
export declare class Source extends SpeakeasyBase {
    fieldId?: string;
    sourceType?: SourceSourceTypeEnum;
}
