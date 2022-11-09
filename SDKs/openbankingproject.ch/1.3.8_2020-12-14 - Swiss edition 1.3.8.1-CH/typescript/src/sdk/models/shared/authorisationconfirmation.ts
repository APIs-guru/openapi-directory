import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// AuthorisationConfirmation
/** 
 * Content of the body of an authorisation confirmation request
 * 
**/
export class AuthorisationConfirmation extends SpeakeasyBase {
  @Metadata({ data: "json, name=confirmationCode" })
  confirmationCode: string;
}
