import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ObBeneficiary5 } from "./obbeneficiary5";



export class ObReadDataBeneficiary5 extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Beneficiary", elemType: ObBeneficiary5 })
  beneficiary?: ObBeneficiary5[];
}
