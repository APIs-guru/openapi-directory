import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// Name
/** 
 * Details of the user's name.
**/
export class Name extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=familyName" })
  familyName?: string;

  @SpeakeasyMetadata({ data: "json, name=fullName" })
  fullName?: string;

  @SpeakeasyMetadata({ data: "json, name=givenName" })
  givenName?: string;
}
