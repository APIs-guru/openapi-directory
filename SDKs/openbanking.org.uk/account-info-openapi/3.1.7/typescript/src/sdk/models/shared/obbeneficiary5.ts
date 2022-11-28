import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ObBeneficiaryType1CodeEnum } from "./obbeneficiarytype1codeenum";
import { ObCashAccount50 } from "./obcashaccount50";
import { ObBranchAndFinancialInstitutionIdentification60 } from "./obbranchandfinancialinstitutionidentification60";



export class ObBeneficiary5 extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=AccountId" })
  accountId?: string;

  @SpeakeasyMetadata({ data: "json, name=BeneficiaryId" })
  beneficiaryId?: string;

  @SpeakeasyMetadata({ data: "json, name=BeneficiaryType" })
  beneficiaryType?: ObBeneficiaryType1CodeEnum;

  @SpeakeasyMetadata({ data: "json, name=CreditorAccount" })
  creditorAccount?: ObCashAccount50;

  @SpeakeasyMetadata({ data: "json, name=CreditorAgent" })
  creditorAgent?: ObBranchAndFinancialInstitutionIdentification60;

  @SpeakeasyMetadata({ data: "json, name=Reference" })
  reference?: string;

  @SpeakeasyMetadata({ data: "json, name=SupplementaryData" })
  supplementaryData?: Map<string, any>;
}
