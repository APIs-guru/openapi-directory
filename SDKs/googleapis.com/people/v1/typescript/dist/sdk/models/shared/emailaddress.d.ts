import { SpeakeasyBase } from "../../../internal/utils";
import { FieldMetadata } from "./fieldmetadata";
import { FieldMetadataInput } from "./fieldmetadata";
/**
 * A person's email address.
**/
export declare class EmailAddress extends SpeakeasyBase {
    displayName?: string;
    formattedType?: string;
    metadata?: FieldMetadata;
    type?: string;
    value?: string;
}
/**
 * A person's email address.
**/
export declare class EmailAddressInput extends SpeakeasyBase {
    displayName?: string;
    metadata?: FieldMetadataInput;
    type?: string;
    value?: string;
}
