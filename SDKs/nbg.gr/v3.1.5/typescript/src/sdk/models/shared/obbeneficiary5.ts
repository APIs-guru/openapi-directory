import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ObBeneficiaryType1CodeEnum } from "./obbeneficiarytype1codeenum";
import { ObCashAccount5 } from "./obcashaccount5";



export class ObBeneficiary5 extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=AccountId" })
  accountId?: string;

  @SpeakeasyMetadata({ data: "json, name=BeneficiaryType" })
  beneficiaryType?: ObBeneficiaryType1CodeEnum;

  @SpeakeasyMetadata({ data: "json, name=CreditorAccount" })
  creditorAccount?: ObCashAccount5;
}
