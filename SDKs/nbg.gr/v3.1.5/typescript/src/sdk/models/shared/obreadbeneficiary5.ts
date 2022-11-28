import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ObReadDataBeneficiary5 } from "./obreaddatabeneficiary5";
import { Links } from "./links";
import { Meta } from "./meta";



export class ObReadBeneficiary5 extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Data" })
  data: ObReadDataBeneficiary5;

  @SpeakeasyMetadata({ data: "json, name=Links" })
  links?: Links;

  @SpeakeasyMetadata({ data: "json, name=Meta" })
  meta?: Meta;
}
