import { SpeakeasyBase } from "../../../internal/utils";
import { FieldMetadataInput } from "./fieldmetadata";
import { FieldMetadata } from "./fieldmetadata";
/**
 * A person's gender.
**/
export declare class GenderInput extends SpeakeasyBase {
    addressMeAs?: string;
    metadata?: FieldMetadataInput;
    value?: string;
}
/**
 * A person's gender.
**/
export declare class Gender extends SpeakeasyBase {
    addressMeAs?: string;
    formattedValue?: string;
    metadata?: FieldMetadata;
    value?: string;
}
