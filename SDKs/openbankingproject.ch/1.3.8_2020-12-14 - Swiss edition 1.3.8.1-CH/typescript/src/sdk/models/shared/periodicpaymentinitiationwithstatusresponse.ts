import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { AccountReference16Ch } from "./accountreference16ch";
import { Address } from "./address";
import { CreditorAgent7Ch } from "./creditoragent7ch";
import { DayOfExecutionEnum } from "./dayofexecutionenum";
import { AccountReference16Ch } from "./accountreference16ch";
import { ExecutionRuleEnum } from "./executionruleenum";
import { FrequencyCodeEnum } from "./frequencycodeenum";
import { Amount } from "./amount";
import { PurposeCodeEnum } from "./purposecodeenum";
import { RemittanceInformationStructured } from "./remittanceinformationstructured";
import { TransactionStatusEnum } from "./transactionstatusenum";


// PeriodicPaymentInitiationWithStatusResponse
/** 
 * Generic JSON response body consistion of the corresponding periodic payment initation JSON body together with an optional transaction status field.
 * 
**/
export class PeriodicPaymentInitiationWithStatusResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=creditorAccount" })
  creditorAccount: AccountReference16Ch;

  @Metadata({ data: "json, name=creditorAddress" })
  creditorAddress?: Address;

  @Metadata({ data: "json, name=creditorAgent" })
  creditorAgent?: CreditorAgent7Ch;

  @Metadata({ data: "json, name=creditorName" })
  creditorName: string;

  @Metadata({ data: "json, name=dayOfExecution" })
  dayOfExecution?: DayOfExecutionEnum;

  @Metadata({ data: "json, name=debtorAccount" })
  debtorAccount: AccountReference16Ch;

  @Metadata({ data: "json, name=endDate" })
  endDate?: Date;

  @Metadata({ data: "json, name=endToEndIdentification" })
  endToEndIdentification?: string;

  @Metadata({ data: "json, name=executionRule" })
  executionRule?: ExecutionRuleEnum;

  @Metadata({ data: "json, name=frequency" })
  frequency: FrequencyCodeEnum;

  @Metadata({ data: "json, name=instructedAmount" })
  instructedAmount: Amount;

  @Metadata({ data: "json, name=purposeCode" })
  purposeCode?: PurposeCodeEnum;

  @Metadata({ data: "json, name=remittanceInformationStructured" })
  remittanceInformationStructured?: RemittanceInformationStructured;

  @Metadata({ data: "json, name=remittanceInformationUnstructured" })
  remittanceInformationUnstructured?: string;

  @Metadata({ data: "json, name=remittanceInformationUnstructuredArray" })
  remittanceInformationUnstructuredArray?: string[];

  @Metadata({ data: "json, name=requestedExecutionDate" })
  requestedExecutionDate?: Date;

  @Metadata({ data: "json, name=requestedExecutionTime" })
  requestedExecutionTime?: Date;

  @Metadata({ data: "json, name=startDate" })
  startDate: Date;

  @Metadata({ data: "json, name=transactionStatus" })
  transactionStatus?: TransactionStatusEnum;

  @Metadata({ data: "json, name=ultimateCreditor" })
  ultimateCreditor?: string;

  @Metadata({ data: "json, name=ultimateDebtor" })
  ultimateDebtor?: string;
}
