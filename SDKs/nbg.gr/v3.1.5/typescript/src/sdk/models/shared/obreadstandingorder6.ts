import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { ObReadDataStandingOrder5 } from "./obreaddatastandingorder5";
import { Links } from "./links";
import { Meta } from "./meta";


export class ObReadStandingOrder6 extends SpeakeasyBase {
  @Metadata({ data: "json, name=Data" })
  data: ObReadDataStandingOrder5;

  @Metadata({ data: "json, name=Links" })
  links?: Links;

  @Metadata({ data: "json, name=Meta" })
  meta?: Meta;
}
