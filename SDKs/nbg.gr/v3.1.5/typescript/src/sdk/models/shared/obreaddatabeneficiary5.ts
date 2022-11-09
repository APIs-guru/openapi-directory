import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { ObBeneficiary5 } from "./obbeneficiary5";


export class ObReadDataBeneficiary5 extends SpeakeasyBase {
  @Metadata({ data: "json, name=Beneficiary", elemType: shared.ObBeneficiary5 })
  beneficiary?: ObBeneficiary5[];
}
