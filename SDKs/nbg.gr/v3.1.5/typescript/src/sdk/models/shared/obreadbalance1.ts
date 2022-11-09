import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { ObReadDataBalance1 } from "./obreaddatabalance1";
import { Links } from "./links";
import { Meta } from "./meta";


export class ObReadBalance1 extends SpeakeasyBase {
  @Metadata({ data: "json, name=Data" })
  data: ObReadDataBalance1;

  @Metadata({ data: "json, name=Links" })
  links: Links;

  @Metadata({ data: "json, name=Meta" })
  meta: Meta;
}
