import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { ObParty2 } from "./obparty2";
import { Links } from "./links";
import { Meta } from "./meta";


export class ObReadParty3Data extends SpeakeasyBase {
  @Metadata({ data: "json, name=Party", elemType: shared.ObParty2 })
  party?: ObParty2[];
}


export class ObReadParty3 extends SpeakeasyBase {
  @Metadata({ data: "json, name=Data" })
  data: ObReadParty3Data;

  @Metadata({ data: "json, name=Links" })
  links?: Links;

  @Metadata({ data: "json, name=Meta" })
  meta?: Meta;
}
