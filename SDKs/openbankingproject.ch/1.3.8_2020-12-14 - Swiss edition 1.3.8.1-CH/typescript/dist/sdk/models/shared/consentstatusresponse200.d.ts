import { SpeakeasyBase } from "../../../internal/utils";
import { ConsentStatusEnum } from "./consentstatusenum";
/**
 * Body of the JSON response for a successful get status request for a consent.
**/
export declare class ConsentStatusResponse200 extends SpeakeasyBase {
    consentStatus: ConsentStatusEnum;
    psuMessage?: string;
}
