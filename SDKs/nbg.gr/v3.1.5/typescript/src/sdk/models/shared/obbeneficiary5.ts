import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { ObBeneficiaryType1CodeEnum } from "./obbeneficiarytype1codeenum";
import { ObCashAccount5 } from "./obcashaccount5";


export class ObBeneficiary5 extends SpeakeasyBase {
  @Metadata({ data: "json, name=AccountId" })
  accountId?: string;

  @Metadata({ data: "json, name=BeneficiaryType" })
  beneficiaryType?: ObBeneficiaryType1CodeEnum;

  @Metadata({ data: "json, name=CreditorAccount" })
  creditorAccount?: ObCashAccount5;
}
