import { SpeakeasyBase } from "../../../internal/utils";
import { HrefType } from "./hreftype";
import { ScaStatusAuthorisationConfirmationEnum } from "./scastatusauthorisationconfirmationenum";
/**
 * Body of the JSON response for an authorisation confirmation request.
**/
export declare class AuthorisationConfirmationResponse extends SpeakeasyBase {
    links: Map<string, HrefType>;
    psuMessage?: string;
    scaStatus: ScaStatusAuthorisationConfirmationEnum;
}
