import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ClaimEventV1 } from "./claimeventv1";
import { AddressV1 } from "./addressv1";



// RiskValueWriteV1
/** 
 * Risk values assign specific values to risk parameters.
**/
export class RiskValueWriteV1 extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=child_risk_values", elemType: RiskValueWriteV1 })
  childRiskValues?: RiskValueWriteV1[];

  @SpeakeasyMetadata({ data: "json, name=risk_parameter_id" })
  riskParameterId: string;

  @SpeakeasyMetadata({ data: "json, name=value" })
  value: any;
}
