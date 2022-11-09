import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { ObReadDataParty2 } from "./obreaddataparty2";
import { Links } from "./links";
import { Meta } from "./meta";


export class ObReadParty2 extends SpeakeasyBase {
  @Metadata({ data: "json, name=Data" })
  data: ObReadDataParty2;

  @Metadata({ data: "json, name=Links" })
  links?: Links;

  @Metadata({ data: "json, name=Meta" })
  meta?: Meta;
}
