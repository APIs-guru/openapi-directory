import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ObStandingOrder5 } from "./obstandingorder5";



export class ObReadDataStandingOrder5 extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=StandingOrder", elemType: ObStandingOrder5 })
  standingOrder?: ObStandingOrder5[];
}
