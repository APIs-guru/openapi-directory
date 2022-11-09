import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// TransactionAuthorisation
/** 
 * Content of the body of a transaction authorisation request
 * 
**/
export class TransactionAuthorisation extends SpeakeasyBase {
  @Metadata({ data: "json, name=scaAuthenticationData" })
  scaAuthenticationData: string;
}
