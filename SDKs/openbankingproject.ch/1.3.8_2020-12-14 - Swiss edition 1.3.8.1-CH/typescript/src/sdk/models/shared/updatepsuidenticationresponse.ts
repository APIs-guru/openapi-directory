import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { HrefType } from "./hreftype";
import { Amount } from "./amount";
import { Amount } from "./amount";
import { Amount } from "./amount";
import { AuthenticationObject } from "./authenticationobject";
import { ScaStatusEnum } from "./scastatusenum";
import { Amount } from "./amount";


// UpdatePsuIdenticationResponse
/** 
 * Body of the JSON response for a successful update PSU identification request.
**/
export class UpdatePsuIdenticationResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=_links", elemType: shared.HrefType })
  links: Map<string, HrefType>;

  @Metadata({ data: "json, name=currencyConversionFees" })
  currencyConversionFees?: Amount;

  @Metadata({ data: "json, name=estimatedInterbankSettlementAmount" })
  estimatedInterbankSettlementAmount?: Amount;

  @Metadata({ data: "json, name=estimatedTotalAmount" })
  estimatedTotalAmount?: Amount;

  @Metadata({ data: "json, name=psuMessage" })
  psuMessage?: string;

  @Metadata({ data: "json, name=scaMethods", elemType: shared.AuthenticationObject })
  scaMethods?: AuthenticationObject[];

  @Metadata({ data: "json, name=scaStatus" })
  scaStatus: ScaStatusEnum;

  @Metadata({ data: "json, name=transactionFees" })
  transactionFees?: Amount;
}
