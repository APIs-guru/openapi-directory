import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { ObBeneficiaryType1CodeEnum } from "./obbeneficiarytype1codeenum";
import { ObCashAccount50 } from "./obcashaccount50";
import { ObBranchAndFinancialInstitutionIdentification60 } from "./obbranchandfinancialinstitutionidentification60";


export class ObBeneficiary5 extends SpeakeasyBase {
  @Metadata({ data: "json, name=AccountId" })
  accountId?: string;

  @Metadata({ data: "json, name=BeneficiaryId" })
  beneficiaryId?: string;

  @Metadata({ data: "json, name=BeneficiaryType" })
  beneficiaryType?: ObBeneficiaryType1CodeEnum;

  @Metadata({ data: "json, name=CreditorAccount" })
  creditorAccount?: ObCashAccount50;

  @Metadata({ data: "json, name=CreditorAgent" })
  creditorAgent?: ObBranchAndFinancialInstitutionIdentification60;

  @Metadata({ data: "json, name=Reference" })
  reference?: string;

  @Metadata({ data: "json, name=SupplementaryData" })
  supplementaryData?: Map<string, any>;
}
