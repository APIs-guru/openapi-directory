import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { ObStandingOrder5 } from "./obstandingorder5";


export class ObReadDataStandingOrder5 extends SpeakeasyBase {
  @Metadata({ data: "json, name=StandingOrder", elemType: shared.ObStandingOrder5 })
  standingOrder?: ObStandingOrder5[];
}
