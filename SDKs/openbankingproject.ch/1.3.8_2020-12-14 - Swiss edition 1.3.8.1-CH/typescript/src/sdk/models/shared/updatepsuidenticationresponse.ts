import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { HrefType } from "./hreftype";
import { Amount } from "./amount";
import { AuthenticationObject } from "./authenticationobject";
import { ScaStatusEnum } from "./scastatusenum";



// UpdatePsuIdenticationResponse
/** 
 * Body of the JSON response for a successful update PSU identification request.
**/
export class UpdatePsuIdenticationResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=_links", elemType: HrefType })
  links: Map<string, HrefType>;

  @SpeakeasyMetadata({ data: "json, name=currencyConversionFees" })
  currencyConversionFees?: Amount;

  @SpeakeasyMetadata({ data: "json, name=estimatedInterbankSettlementAmount" })
  estimatedInterbankSettlementAmount?: Amount;

  @SpeakeasyMetadata({ data: "json, name=estimatedTotalAmount" })
  estimatedTotalAmount?: Amount;

  @SpeakeasyMetadata({ data: "json, name=psuMessage" })
  psuMessage?: string;

  @SpeakeasyMetadata({ data: "json, name=scaMethods", elemType: AuthenticationObject })
  scaMethods?: AuthenticationObject[];

  @SpeakeasyMetadata({ data: "json, name=scaStatus" })
  scaStatus: ScaStatusEnum;

  @SpeakeasyMetadata({ data: "json, name=transactionFees" })
  transactionFees?: Amount;
}
