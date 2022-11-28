import { SpeakeasyBase } from "../../../internal/utils";
import { HrefType } from "./hreftype";
import { Amount } from "./amount";
import { AuthenticationObject } from "./authenticationobject";
import { ScaStatusEnum } from "./scastatusenum";
/**
 * Body of the JSON response for a successful update PSU identification request.
**/
export declare class UpdatePsuIdenticationResponse extends SpeakeasyBase {
    links: Map<string, HrefType>;
    currencyConversionFees?: Amount;
    estimatedInterbankSettlementAmount?: Amount;
    estimatedTotalAmount?: Amount;
    psuMessage?: string;
    scaMethods?: AuthenticationObject[];
    scaStatus: ScaStatusEnum;
    transactionFees?: Amount;
}
