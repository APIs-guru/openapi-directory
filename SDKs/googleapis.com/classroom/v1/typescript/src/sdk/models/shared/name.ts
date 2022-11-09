import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// Name
/** 
 * Details of the user's name.
**/
export class Name extends SpeakeasyBase {
  @Metadata({ data: "json, name=familyName" })
  familyName?: string;

  @Metadata({ data: "json, name=fullName" })
  fullName?: string;

  @Metadata({ data: "json, name=givenName" })
  givenName?: string;
}
