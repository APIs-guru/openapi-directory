import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ConsentStatusEnum } from "./consentstatusenum";



// ConsentStatusResponse200
/** 
 * Body of the JSON response for a successful get status request for a consent.
**/
export class ConsentStatusResponse200 extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=consentStatus" })
  consentStatus: ConsentStatusEnum;

  @SpeakeasyMetadata({ data: "json, name=psuMessage" })
  psuMessage?: string;
}
