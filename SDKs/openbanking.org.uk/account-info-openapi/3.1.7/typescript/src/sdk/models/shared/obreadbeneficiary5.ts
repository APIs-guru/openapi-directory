import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ObBeneficiary5 } from "./obbeneficiary5";
import { Links } from "./links";
import { Meta } from "./meta";



export class ObReadBeneficiary5Data extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Beneficiary", elemType: ObBeneficiary5 })
  beneficiary?: ObBeneficiary5[];
}


export class ObReadBeneficiary5 extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Data" })
  data: ObReadBeneficiary5Data;

  @SpeakeasyMetadata({ data: "json, name=Links" })
  links?: Links;

  @SpeakeasyMetadata({ data: "json, name=Meta" })
  meta?: Meta;
}
