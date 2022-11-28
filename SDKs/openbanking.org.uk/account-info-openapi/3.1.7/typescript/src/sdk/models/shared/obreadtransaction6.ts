import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ObReadDataTransaction6 } from "./obreaddatatransaction6";
import { Links } from "./links";
import { Meta } from "./meta";



export class ObReadTransaction6 extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Data" })
  data: ObReadDataTransaction6;

  @SpeakeasyMetadata({ data: "json, name=Links" })
  links?: Links;

  @SpeakeasyMetadata({ data: "json, name=Meta" })
  meta?: Meta;
}
