import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { ObReadDataParty3 } from "./obreaddataparty3";
import { Links } from "./links";
import { Meta } from "./meta";


export class ObReadParty3 extends SpeakeasyBase {
  @Metadata({ data: "json, name=Data" })
  data: ObReadDataParty3;

  @Metadata({ data: "json, name=Links" })
  links?: Links;

  @Metadata({ data: "json, name=Meta" })
  meta?: Meta;
}
