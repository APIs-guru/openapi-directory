import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum PhoneNumberTypeEnum {
    Other = "OTHER",
    Mobile = "MOBILE",
    Office = "OFFICE"
}


// PhoneNumber
/** 
 * A person's Phone Number
**/
export class PhoneNumber extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=phoneNumber" })
  phoneNumber?: string;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type?: PhoneNumberTypeEnum;
}
