import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// SigningBasket
/** 
 * JSON Body of a establish signing basket request.
 * The body shall contain at least one entry.
 * 
**/
export class SigningBasket extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=consentIds" })
  consentIds?: string[];

  @SpeakeasyMetadata({ data: "json, name=paymentIds" })
  paymentIds?: string[];
}
