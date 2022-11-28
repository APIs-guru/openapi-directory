import { SpeakeasyBase } from "../../../internal/utils";
export declare enum InputMappingLocationEnum {
    Unknown = "UNKNOWN",
    Path = "PATH",
    Query = "QUERY",
    Body = "BODY",
    Header = "HEADER"
}
/**
 * InputMapping creates a 'virtual' property that will be injected into the properties before sending the request to the underlying API.
**/
export declare class InputMapping extends SpeakeasyBase {
    fieldName?: string;
    location?: InputMappingLocationEnum;
    methodMatch?: string;
    value?: string;
}
