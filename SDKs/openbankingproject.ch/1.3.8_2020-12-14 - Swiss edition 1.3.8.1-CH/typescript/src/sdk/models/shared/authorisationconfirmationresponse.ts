import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { HrefType } from "./hreftype";
import { ScaStatusAuthorisationConfirmationEnum } from "./scastatusauthorisationconfirmationenum";


// AuthorisationConfirmationResponse
/** 
 * Body of the JSON response for an authorisation confirmation request.
**/
export class AuthorisationConfirmationResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=_links", elemType: shared.HrefType })
  links: Map<string, HrefType>;

  @Metadata({ data: "json, name=psuMessage" })
  psuMessage?: string;

  @Metadata({ data: "json, name=scaStatus" })
  scaStatus: ScaStatusAuthorisationConfirmationEnum;
}
