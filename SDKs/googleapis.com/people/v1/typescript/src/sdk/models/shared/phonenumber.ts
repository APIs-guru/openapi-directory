import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { FieldMetadata } from "./fieldmetadata";
import { FieldMetadataInput } from "./fieldmetadata";



// PhoneNumber
/** 
 * A person's phone number.
**/
export class PhoneNumber extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=canonicalForm" })
  canonicalForm?: string;

  @SpeakeasyMetadata({ data: "json, name=formattedType" })
  formattedType?: string;

  @SpeakeasyMetadata({ data: "json, name=metadata" })
  metadata?: FieldMetadata;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type?: string;

  @SpeakeasyMetadata({ data: "json, name=value" })
  value?: string;
}


// PhoneNumberInput
/** 
 * A person's phone number.
**/
export class PhoneNumberInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=metadata" })
  metadata?: FieldMetadataInput;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type?: string;

  @SpeakeasyMetadata({ data: "json, name=value" })
  value?: string;
}
