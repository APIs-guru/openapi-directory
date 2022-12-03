import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { CoverageValueReadV1 } from "./coveragevaluereadv1";
import { RiskValueReadV1 } from "./riskvaluereadv1";


export enum ApplicationReadV1StatusEnum {
    Incomplete = "incomplete",
    Complete = "complete",
    Submitted = "submitted"
}


// ApplicationReadV1
/** 
 * An application is a set of information submitted by a producer to institutions in order to get quotes.
**/
export class ApplicationReadV1 extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=coverage_values", elemType: CoverageValueReadV1 })
  coverageValues?: CoverageValueReadV1[];

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=products" })
  products?: string[];

  @SpeakeasyMetadata({ data: "json, name=risk_values", elemType: RiskValueReadV1 })
  riskValues?: RiskValueReadV1[];

  @SpeakeasyMetadata({ data: "json, name=status" })
  status?: ApplicationReadV1StatusEnum;
}
