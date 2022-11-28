import { SpeakeasyBase } from "../../../internal/utils";
import { AccountReference16Ch } from "./accountreference16ch";
import { Address } from "./address";
import { CreditorAgent7Ch } from "./creditoragent7ch";
import { DayOfExecutionEnum } from "./dayofexecutionenum";
import { ExecutionRuleEnum } from "./executionruleenum";
import { FrequencyCodeEnum } from "./frequencycodeenum";
import { Amount } from "./amount";
import { PurposeCodeEnum } from "./purposecodeenum";
import { RemittanceInformationStructured } from "./remittanceinformationstructured";
import { TransactionStatusEnum } from "./transactionstatusenum";
/**
 * Generic JSON response body consistion of the corresponding periodic payment initation JSON body together with an optional transaction status field.
 *
**/
export declare class PeriodicPaymentInitiationWithStatusResponse extends SpeakeasyBase {
    creditorAccount: AccountReference16Ch;
    creditorAddress?: Address;
    creditorAgent?: CreditorAgent7Ch;
    creditorName: string;
    dayOfExecution?: DayOfExecutionEnum;
    debtorAccount: AccountReference16Ch;
    endDate?: Date;
    endToEndIdentification?: string;
    executionRule?: ExecutionRuleEnum;
    frequency: FrequencyCodeEnum;
    instructedAmount: Amount;
    purposeCode?: PurposeCodeEnum;
    remittanceInformationStructured?: RemittanceInformationStructured;
    remittanceInformationUnstructured?: string;
    remittanceInformationUnstructuredArray?: string[];
    requestedExecutionDate?: Date;
    requestedExecutionTime?: Date;
    startDate: Date;
    transactionStatus?: TransactionStatusEnum;
    ultimateCreditor?: string;
    ultimateDebtor?: string;
}
