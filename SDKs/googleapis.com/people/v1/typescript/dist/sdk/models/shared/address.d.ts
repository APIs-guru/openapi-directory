import { SpeakeasyBase } from "../../../internal/utils";
import { FieldMetadata } from "./fieldmetadata";
import { FieldMetadataInput } from "./fieldmetadata";
/**
 * A person's physical address. May be a P.O. box or street address. All fields are optional.
**/
export declare class Address extends SpeakeasyBase {
    city?: string;
    country?: string;
    countryCode?: string;
    extendedAddress?: string;
    formattedType?: string;
    formattedValue?: string;
    metadata?: FieldMetadata;
    poBox?: string;
    postalCode?: string;
    region?: string;
    streetAddress?: string;
    type?: string;
}
/**
 * A person's physical address. May be a P.O. box or street address. All fields are optional.
**/
export declare class AddressInput extends SpeakeasyBase {
    city?: string;
    country?: string;
    countryCode?: string;
    extendedAddress?: string;
    formattedValue?: string;
    metadata?: FieldMetadataInput;
    poBox?: string;
    postalCode?: string;
    region?: string;
    streetAddress?: string;
    type?: string;
}
