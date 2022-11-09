import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { ObStandingOrder6 } from "./obstandingorder6";
import { Links } from "./links";
import { Meta } from "./meta";


export class ObReadStandingOrder6Data extends SpeakeasyBase {
  @Metadata({ data: "json, name=StandingOrder", elemType: shared.ObStandingOrder6 })
  standingOrder?: ObStandingOrder6[];
}


export class ObReadStandingOrder6 extends SpeakeasyBase {
  @Metadata({ data: "json, name=Data" })
  data: ObReadStandingOrder6Data;

  @Metadata({ data: "json, name=Links" })
  links?: Links;

  @Metadata({ data: "json, name=Meta" })
  meta?: Meta;
}
