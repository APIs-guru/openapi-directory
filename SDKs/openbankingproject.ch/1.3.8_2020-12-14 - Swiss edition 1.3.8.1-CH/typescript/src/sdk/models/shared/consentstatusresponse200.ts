import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { ConsentStatusEnum } from "./consentstatusenum";


// ConsentStatusResponse200
/** 
 * Body of the JSON response for a successful get status request for a consent.
**/
export class ConsentStatusResponse200 extends SpeakeasyBase {
  @Metadata({ data: "json, name=consentStatus" })
  consentStatus: ConsentStatusEnum;

  @Metadata({ data: "json, name=psuMessage" })
  psuMessage?: string;
}
