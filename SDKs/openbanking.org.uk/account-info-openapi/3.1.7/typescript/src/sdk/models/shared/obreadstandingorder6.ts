import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ObStandingOrder6 } from "./obstandingorder6";
import { Links } from "./links";
import { Meta } from "./meta";



export class ObReadStandingOrder6Data extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=StandingOrder", elemType: ObStandingOrder6 })
  standingOrder?: ObStandingOrder6[];
}


export class ObReadStandingOrder6 extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Data" })
  data: ObReadStandingOrder6Data;

  @SpeakeasyMetadata({ data: "json, name=Links" })
  links?: Links;

  @SpeakeasyMetadata({ data: "json, name=Meta" })
  meta?: Meta;
}
