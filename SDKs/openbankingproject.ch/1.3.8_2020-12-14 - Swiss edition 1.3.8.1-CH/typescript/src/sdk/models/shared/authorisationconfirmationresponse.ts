import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { HrefType } from "./hreftype";
import { ScaStatusAuthorisationConfirmationEnum } from "./scastatusauthorisationconfirmationenum";



// AuthorisationConfirmationResponse
/** 
 * Body of the JSON response for an authorisation confirmation request.
**/
export class AuthorisationConfirmationResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=_links", elemType: HrefType })
  links: Map<string, HrefType>;

  @SpeakeasyMetadata({ data: "json, name=psuMessage" })
  psuMessage?: string;

  @SpeakeasyMetadata({ data: "json, name=scaStatus" })
  scaStatus: ScaStatusAuthorisationConfirmationEnum;
}
