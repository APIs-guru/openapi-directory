import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ObReadDataParty2 } from "./obreaddataparty2";
import { Links } from "./links";
import { Meta } from "./meta";



export class ObReadParty2 extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Data" })
  data: ObReadDataParty2;

  @SpeakeasyMetadata({ data: "json, name=Links" })
  links?: Links;

  @SpeakeasyMetadata({ data: "json, name=Meta" })
  meta?: Meta;
}
