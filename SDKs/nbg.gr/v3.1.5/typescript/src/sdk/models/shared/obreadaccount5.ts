import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { ObReadDataAccount5 } from "./obreaddataaccount5";
import { Links } from "./links";
import { Meta } from "./meta";


export class ObReadAccount5 extends SpeakeasyBase {
  @Metadata({ data: "json, name=Data" })
  data: ObReadDataAccount5;

  @Metadata({ data: "json, name=Links" })
  links?: Links;

  @Metadata({ data: "json, name=Meta" })
  meta?: Meta;
}
