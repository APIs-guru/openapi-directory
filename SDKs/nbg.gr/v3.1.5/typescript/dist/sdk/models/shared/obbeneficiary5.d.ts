import { SpeakeasyBase } from "../../../internal/utils";
import { ObBeneficiaryType1CodeEnum } from "./obbeneficiarytype1codeenum";
import { ObCashAccount5 } from "./obcashaccount5";
export declare class ObBeneficiary5 extends SpeakeasyBase {
    accountId?: string;
    beneficiaryType?: ObBeneficiaryType1CodeEnum;
    creditorAccount?: ObCashAccount5;
}
