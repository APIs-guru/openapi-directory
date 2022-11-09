import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { ObReadDataBeneficiary5 } from "./obreaddatabeneficiary5";
import { Links } from "./links";
import { Meta } from "./meta";


export class ObReadBeneficiary5 extends SpeakeasyBase {
  @Metadata({ data: "json, name=Data" })
  data: ObReadDataBeneficiary5;

  @Metadata({ data: "json, name=Links" })
  links?: Links;

  @Metadata({ data: "json, name=Meta" })
  meta?: Meta;
}
