import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { ObParty2 } from "./obparty2";
import { Links } from "./links";
import { Meta } from "./meta";


export class ObReadParty2Data extends SpeakeasyBase {
  @Metadata({ data: "json, name=Party" })
  party?: ObParty2;
}


export class ObReadParty2 extends SpeakeasyBase {
  @Metadata({ data: "json, name=Data" })
  data: ObReadParty2Data;

  @Metadata({ data: "json, name=Links" })
  links?: Links;

  @Metadata({ data: "json, name=Meta" })
  meta?: Meta;
}
