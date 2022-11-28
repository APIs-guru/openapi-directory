import { SpeakeasyBase } from "../../../internal/utils";
import { FieldMetadata } from "./fieldmetadata";
import { FieldMetadataInput } from "./fieldmetadata";
/**
 * Arbitrary user data that is populated by the end users.
**/
export declare class UserDefined extends SpeakeasyBase {
    key?: string;
    metadata?: FieldMetadata;
    value?: string;
}
/**
 * Arbitrary user data that is populated by the end users.
**/
export declare class UserDefinedInput extends SpeakeasyBase {
    key?: string;
    metadata?: FieldMetadataInput;
    value?: string;
}
