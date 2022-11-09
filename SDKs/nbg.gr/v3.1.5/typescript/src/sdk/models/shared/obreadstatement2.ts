import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { ObReadDataStatement2 } from "./obreaddatastatement2";
import { Links } from "./links";
import { Meta } from "./meta";


export class ObReadStatement2 extends SpeakeasyBase {
  @Metadata({ data: "json, name=Data" })
  data: ObReadDataStatement2;

  @Metadata({ data: "json, name=Links" })
  links?: Links;

  @Metadata({ data: "json, name=Meta" })
  meta?: Meta;
}
