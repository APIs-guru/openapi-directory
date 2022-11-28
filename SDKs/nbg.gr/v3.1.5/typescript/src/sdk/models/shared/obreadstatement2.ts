import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ObReadDataStatement2 } from "./obreaddatastatement2";
import { Links } from "./links";
import { Meta } from "./meta";



export class ObReadStatement2 extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Data" })
  data: ObReadDataStatement2;

  @SpeakeasyMetadata({ data: "json, name=Links" })
  links?: Links;

  @SpeakeasyMetadata({ data: "json, name=Meta" })
  meta?: Meta;
}
