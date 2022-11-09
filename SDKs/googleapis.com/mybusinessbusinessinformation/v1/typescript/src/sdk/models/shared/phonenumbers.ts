import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// PhoneNumbers
/** 
 * A collection of phone numbers for the business. During updates, both fields must be set. Clients may not update just the primary or additional phone numbers using the update mask. International phone format is preferred, such as "+1 415 555 0132", see more in (https://developers.google.com/style/phone-numbers#international-phone-numbers).
**/
export class PhoneNumbers extends SpeakeasyBase {
  @Metadata({ data: "json, name=additionalPhones" })
  additionalPhones?: string[];

  @Metadata({ data: "json, name=primaryPhone" })
  primaryPhone?: string;
}
