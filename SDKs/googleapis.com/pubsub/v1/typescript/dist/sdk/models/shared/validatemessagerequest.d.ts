import { SpeakeasyBase } from "../../../internal/utils/utils";
import { Schema } from "./schema";
export declare enum ValidateMessageRequestEncodingEnum {
    EncodingUnspecified = "ENCODING_UNSPECIFIED",
    Json = "JSON",
    Binary = "BINARY"
}
/**
 * Request for the `ValidateMessage` method.
**/
export declare class ValidateMessageRequest extends SpeakeasyBase {
    encoding?: ValidateMessageRequestEncodingEnum;
    message?: string;
    name?: string;
    schema?: Schema;
}
