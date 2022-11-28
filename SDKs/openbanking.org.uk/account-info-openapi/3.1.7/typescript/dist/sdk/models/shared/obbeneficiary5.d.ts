import { SpeakeasyBase } from "../../../internal/utils";
import { ObBeneficiaryType1CodeEnum } from "./obbeneficiarytype1codeenum";
import { ObCashAccount50 } from "./obcashaccount50";
import { ObBranchAndFinancialInstitutionIdentification60 } from "./obbranchandfinancialinstitutionidentification60";
export declare class ObBeneficiary5 extends SpeakeasyBase {
    accountId?: string;
    beneficiaryId?: string;
    beneficiaryType?: ObBeneficiaryType1CodeEnum;
    creditorAccount?: ObCashAccount50;
    creditorAgent?: ObBranchAndFinancialInstitutionIdentification60;
    reference?: string;
    supplementaryData?: Map<string, any>;
}
