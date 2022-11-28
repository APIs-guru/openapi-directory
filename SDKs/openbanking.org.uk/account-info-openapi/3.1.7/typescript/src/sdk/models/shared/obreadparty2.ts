import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ObParty2 } from "./obparty2";
import { Links } from "./links";
import { Meta } from "./meta";



export class ObReadParty2Data extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Party" })
  party?: ObParty2;
}


export class ObReadParty2 extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Data" })
  data: ObReadParty2Data;

  @SpeakeasyMetadata({ data: "json, name=Links" })
  links?: Links;

  @SpeakeasyMetadata({ data: "json, name=Meta" })
  meta?: Meta;
}
