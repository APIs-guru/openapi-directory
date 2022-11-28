import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ObReadDataBalance1 } from "./obreaddatabalance1";
import { Links } from "./links";
import { Meta } from "./meta";



export class ObReadBalance1 extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Data" })
  data: ObReadDataBalance1;

  @SpeakeasyMetadata({ data: "json, name=Links" })
  links: Links;

  @SpeakeasyMetadata({ data: "json, name=Meta" })
  meta: Meta;
}
