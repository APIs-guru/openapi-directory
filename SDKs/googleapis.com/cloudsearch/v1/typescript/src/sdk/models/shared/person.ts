import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { EmailAddress } from "./emailaddress";
import { Name } from "./name";
import { PhoneNumber } from "./phonenumber";
import { Photo } from "./photo";


// Person
/** 
 * Object to represent a person.
**/
export class Person extends SpeakeasyBase {
  @Metadata({ data: "json, name=emailAddresses", elemType: shared.EmailAddress })
  emailAddresses?: EmailAddress[];

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=obfuscatedId" })
  obfuscatedId?: string;

  @Metadata({ data: "json, name=personNames", elemType: shared.Name })
  personNames?: Name[];

  @Metadata({ data: "json, name=phoneNumbers", elemType: shared.PhoneNumber })
  phoneNumbers?: PhoneNumber[];

  @Metadata({ data: "json, name=photos", elemType: shared.Photo })
  photos?: Photo[];
}
