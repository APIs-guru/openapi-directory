import { SpeakeasyBase } from "../../../internal/utils";
import { SchemaInput } from "./schema";
export declare enum ValidateMessageRequestEncodingEnum {
    EncodingUnspecified = "ENCODING_UNSPECIFIED",
    Json = "JSON",
    Binary = "BINARY"
}
/**
 * Request for the `ValidateMessage` method.
**/
export declare class ValidateMessageRequestInput extends SpeakeasyBase {
    encoding?: ValidateMessageRequestEncodingEnum;
    message?: string;
    name?: string;
    schema?: SchemaInput;
}
