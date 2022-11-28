import { SpeakeasyBase } from "../../../internal/utils";
import { FieldMetadata } from "./fieldmetadata";
import { FieldMetadataInput } from "./fieldmetadata";
/**
 * A person's phone number.
**/
export declare class PhoneNumber extends SpeakeasyBase {
    canonicalForm?: string;
    formattedType?: string;
    metadata?: FieldMetadata;
    type?: string;
    value?: string;
}
/**
 * A person's phone number.
**/
export declare class PhoneNumberInput extends SpeakeasyBase {
    metadata?: FieldMetadataInput;
    type?: string;
    value?: string;
}
