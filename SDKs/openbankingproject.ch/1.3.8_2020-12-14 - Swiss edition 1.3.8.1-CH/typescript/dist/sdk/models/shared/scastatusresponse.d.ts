import { SpeakeasyBase } from "../../../internal/utils";
import { ScaStatusEnum } from "./scastatusenum";
/**
 * Body of the JSON response with SCA Status.
**/
export declare class ScaStatusResponse extends SpeakeasyBase {
    psuMessage?: string;
    scaStatus: ScaStatusEnum;
    trustedBeneficiaryFlag?: boolean;
}
