import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { ScaStatusEnum } from "./scastatusenum";


// ScaStatusResponse
/** 
 * Body of the JSON response with SCA Status.
**/
export class ScaStatusResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=psuMessage" })
  psuMessage?: string;

  @Metadata({ data: "json, name=scaStatus" })
  scaStatus: ScaStatusEnum;

  @Metadata({ data: "json, name=trustedBeneficiaryFlag" })
  trustedBeneficiaryFlag?: boolean;
}
