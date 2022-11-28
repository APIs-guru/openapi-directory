import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { EmailAddress } from "./emailaddress";
import { Name } from "./name";
import { PhoneNumber } from "./phonenumber";
import { Photo } from "./photo";



// Person
/** 
 * Object to represent a person.
**/
export class Person extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=emailAddresses", elemType: EmailAddress })
  emailAddresses?: EmailAddress[];

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=obfuscatedId" })
  obfuscatedId?: string;

  @SpeakeasyMetadata({ data: "json, name=personNames", elemType: Name })
  personNames?: Name[];

  @SpeakeasyMetadata({ data: "json, name=phoneNumbers", elemType: PhoneNumber })
  phoneNumbers?: PhoneNumber[];

  @SpeakeasyMetadata({ data: "json, name=photos", elemType: Photo })
  photos?: Photo[];
}
