import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// Contact
/** 
 * Representa a single contact's email address
**/
export class Contact extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=email" })
  email?: string;
}
