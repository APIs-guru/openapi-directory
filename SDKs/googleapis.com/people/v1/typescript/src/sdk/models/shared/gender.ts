import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { FieldMetadataInput } from "./fieldmetadata";
import { FieldMetadata } from "./fieldmetadata";



// GenderInput
/** 
 * A person's gender.
**/
export class GenderInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=addressMeAs" })
  addressMeAs?: string;

  @SpeakeasyMetadata({ data: "json, name=metadata" })
  metadata?: FieldMetadataInput;

  @SpeakeasyMetadata({ data: "json, name=value" })
  value?: string;
}


// Gender
/** 
 * A person's gender.
**/
export class Gender extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=addressMeAs" })
  addressMeAs?: string;

  @SpeakeasyMetadata({ data: "json, name=formattedValue" })
  formattedValue?: string;

  @SpeakeasyMetadata({ data: "json, name=metadata" })
  metadata?: FieldMetadata;

  @SpeakeasyMetadata({ data: "json, name=value" })
  value?: string;
}
