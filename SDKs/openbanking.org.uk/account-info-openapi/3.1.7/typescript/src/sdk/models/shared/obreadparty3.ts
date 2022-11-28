import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ObParty2 } from "./obparty2";
import { Links } from "./links";
import { Meta } from "./meta";



export class ObReadParty3Data extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Party", elemType: ObParty2 })
  party?: ObParty2[];
}


export class ObReadParty3 extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Data" })
  data: ObReadParty3Data;

  @SpeakeasyMetadata({ data: "json, name=Links" })
  links?: Links;

  @SpeakeasyMetadata({ data: "json, name=Meta" })
  meta?: Meta;
}
