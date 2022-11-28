import { SpeakeasyBase } from "../../../internal/utils";
import { AccountReference16Ch } from "./accountreference16ch";
import { Address } from "./address";
import { CreditorAgent7Ch } from "./creditoragent7ch";
import { Amount } from "./amount";
import { PurposeCodeEnum } from "./purposecodeenum";
import { RemittanceInformationStructured } from "./remittanceinformationstructured";
import { TransactionStatusEnum } from "./transactionstatusenum";
/**
 * Generic JSON response body consistion of the corresponding payment initation JSON body together with an optional transaction status field.
 *
**/
export declare class PaymentInitiationWithStatusResponse extends SpeakeasyBase {
    creditorAccount: AccountReference16Ch;
    creditorAddress?: Address;
    creditorAgent?: CreditorAgent7Ch;
    creditorName: string;
    debtorAccount: AccountReference16Ch;
    endToEndIdentification?: string;
    instructedAmount: Amount;
    purposeCode?: PurposeCodeEnum;
    remittanceInformationStructured?: RemittanceInformationStructured;
    remittanceInformationUnstructured?: string;
    remittanceInformationUnstructuredArray?: string[];
    requestedExecutionDate?: Date;
    requestedExecutionTime?: Date;
    transactionStatus?: TransactionStatusEnum;
    ultimateCreditor?: string;
    ultimateDebtor?: string;
}
