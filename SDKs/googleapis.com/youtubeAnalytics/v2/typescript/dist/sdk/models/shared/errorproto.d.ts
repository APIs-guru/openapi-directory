import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare enum ErrorProtoLocationTypeEnum {
    Path = "PATH",
    Other = "OTHER",
    Parameter = "PARAMETER"
}
/**
 * Describes one specific error.
**/
export declare class ErrorProto extends SpeakeasyBase {
    argument?: string[];
    code?: string;
    debugInfo?: string;
    domain?: string;
    externalErrorMessage?: string;
    location?: string;
    locationType?: ErrorProtoLocationTypeEnum;
}
