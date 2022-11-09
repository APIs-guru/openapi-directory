import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum PhoneNumberTypeEnum {
    Other = "OTHER"
,    Mobile = "MOBILE"
,    Office = "OFFICE"
}


// PhoneNumber
/** 
 * A person's Phone Number
**/
export class PhoneNumber extends SpeakeasyBase {
  @Metadata({ data: "json, name=phoneNumber" })
  phoneNumber?: string;

  @Metadata({ data: "json, name=type" })
  type?: PhoneNumberTypeEnum;
}
