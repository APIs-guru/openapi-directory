import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// PhoneInput
/** 
 * Input for PHONE_CALL/SMS verification.
**/
export class PhoneInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=phoneNumber" })
  phoneNumber?: string;
}
