import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { FieldMetadata } from "./fieldmetadata";
import { FieldMetadataInput } from "./fieldmetadata";



// Address
/** 
 * A person's physical address. May be a P.O. box or street address. All fields are optional.
**/
export class Address extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=city" })
  city?: string;

  @SpeakeasyMetadata({ data: "json, name=country" })
  country?: string;

  @SpeakeasyMetadata({ data: "json, name=countryCode" })
  countryCode?: string;

  @SpeakeasyMetadata({ data: "json, name=extendedAddress" })
  extendedAddress?: string;

  @SpeakeasyMetadata({ data: "json, name=formattedType" })
  formattedType?: string;

  @SpeakeasyMetadata({ data: "json, name=formattedValue" })
  formattedValue?: string;

  @SpeakeasyMetadata({ data: "json, name=metadata" })
  metadata?: FieldMetadata;

  @SpeakeasyMetadata({ data: "json, name=poBox" })
  poBox?: string;

  @SpeakeasyMetadata({ data: "json, name=postalCode" })
  postalCode?: string;

  @SpeakeasyMetadata({ data: "json, name=region" })
  region?: string;

  @SpeakeasyMetadata({ data: "json, name=streetAddress" })
  streetAddress?: string;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type?: string;
}


// AddressInput
/** 
 * A person's physical address. May be a P.O. box or street address. All fields are optional.
**/
export class AddressInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=city" })
  city?: string;

  @SpeakeasyMetadata({ data: "json, name=country" })
  country?: string;

  @SpeakeasyMetadata({ data: "json, name=countryCode" })
  countryCode?: string;

  @SpeakeasyMetadata({ data: "json, name=extendedAddress" })
  extendedAddress?: string;

  @SpeakeasyMetadata({ data: "json, name=formattedValue" })
  formattedValue?: string;

  @SpeakeasyMetadata({ data: "json, name=metadata" })
  metadata?: FieldMetadataInput;

  @SpeakeasyMetadata({ data: "json, name=poBox" })
  poBox?: string;

  @SpeakeasyMetadata({ data: "json, name=postalCode" })
  postalCode?: string;

  @SpeakeasyMetadata({ data: "json, name=region" })
  region?: string;

  @SpeakeasyMetadata({ data: "json, name=streetAddress" })
  streetAddress?: string;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type?: string;
}
