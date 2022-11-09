import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { ObReadDataTransaction6 } from "./obreaddatatransaction6";
import { Links } from "./links";
import { Meta } from "./meta";


export class ObReadTransaction6 extends SpeakeasyBase {
  @Metadata({ data: "json, name=Data" })
  data: ObReadDataTransaction6;

  @Metadata({ data: "json, name=Links" })
  links?: Links;

  @Metadata({ data: "json, name=Meta" })
  meta?: Meta;
}
