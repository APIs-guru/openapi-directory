import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// PhoneInput
/** 
 * Input for PHONE_CALL/SMS verification.
**/
export class PhoneInput extends SpeakeasyBase {
  @Metadata({ data: "json, name=phoneNumber" })
  phoneNumber?: string;
}
