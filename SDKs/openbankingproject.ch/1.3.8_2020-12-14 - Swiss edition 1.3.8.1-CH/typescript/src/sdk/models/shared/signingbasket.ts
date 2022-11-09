import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// SigningBasket
/** 
 * JSON Body of a establish signing basket request.
 * The body shall contain at least one entry.
 * 
**/
export class SigningBasket extends SpeakeasyBase {
  @Metadata({ data: "json, name=consentIds" })
  consentIds?: string[];

  @Metadata({ data: "json, name=paymentIds" })
  paymentIds?: string[];
}
