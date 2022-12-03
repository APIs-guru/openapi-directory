import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { CoverageValueWriteV1 } from "./coveragevaluewritev1";
import { RiskValueWriteV1 } from "./riskvaluewritev1";



// ApplicationWriteV1
/** 
 * An application is a set of information submitted by a producer to institutions in order to get quotes.
**/
export class ApplicationWriteV1 extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=coverage_values", elemType: CoverageValueWriteV1 })
  coverageValues?: CoverageValueWriteV1[];

  @SpeakeasyMetadata({ data: "json, name=products" })
  products: string[];

  @SpeakeasyMetadata({ data: "json, name=risk_values", elemType: RiskValueWriteV1 })
  riskValues?: RiskValueWriteV1[];
}
