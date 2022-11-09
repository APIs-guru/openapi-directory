import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// Contact
/** 
 * Representa a single contact's email address
**/
export class Contact extends SpeakeasyBase {
  @Metadata({ data: "json, name=email" })
  email?: string;
}
