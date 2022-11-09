import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { ObBeneficiary5 } from "./obbeneficiary5";
import { Links } from "./links";
import { Meta } from "./meta";


export class ObReadBeneficiary5Data extends SpeakeasyBase {
  @Metadata({ data: "json, name=Beneficiary", elemType: shared.ObBeneficiary5 })
  beneficiary?: ObBeneficiary5[];
}


export class ObReadBeneficiary5 extends SpeakeasyBase {
  @Metadata({ data: "json, name=Data" })
  data: ObReadBeneficiary5Data;

  @Metadata({ data: "json, name=Links" })
  links?: Links;

  @Metadata({ data: "json, name=Meta" })
  meta?: Meta;
}
