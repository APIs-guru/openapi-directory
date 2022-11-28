import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// TransactionAuthorisation
/** 
 * Content of the body of a transaction authorisation request
 * 
**/
export class TransactionAuthorisation extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=scaAuthenticationData" })
  scaAuthenticationData: string;
}
