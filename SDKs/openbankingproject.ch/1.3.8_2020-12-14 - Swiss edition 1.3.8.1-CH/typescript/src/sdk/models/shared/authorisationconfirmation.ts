import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// AuthorisationConfirmation
/** 
 * Content of the body of an authorisation confirmation request
 * 
**/
export class AuthorisationConfirmation extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=confirmationCode" })
  confirmationCode: string;
}
