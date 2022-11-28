import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ScaStatusEnum } from "./scastatusenum";



// ScaStatusResponse
/** 
 * Body of the JSON response with SCA Status.
**/
export class ScaStatusResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=psuMessage" })
  psuMessage?: string;

  @SpeakeasyMetadata({ data: "json, name=scaStatus" })
  scaStatus: ScaStatusEnum;

  @SpeakeasyMetadata({ data: "json, name=trustedBeneficiaryFlag" })
  trustedBeneficiaryFlag?: boolean;
}
