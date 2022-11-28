import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
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



// PeriodicPaymentInitiationWithStatusResponse
/** 
 * Generic JSON response body consistion of the corresponding periodic payment initation JSON body together with an optional transaction status field.
 * 
**/
export class PeriodicPaymentInitiationWithStatusResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=creditorAccount" })
  creditorAccount: AccountReference16Ch;

  @SpeakeasyMetadata({ data: "json, name=creditorAddress" })
  creditorAddress?: Address;

  @SpeakeasyMetadata({ data: "json, name=creditorAgent" })
  creditorAgent?: CreditorAgent7Ch;

  @SpeakeasyMetadata({ data: "json, name=creditorName" })
  creditorName: string;

  @SpeakeasyMetadata({ data: "json, name=dayOfExecution" })
  dayOfExecution?: DayOfExecutionEnum;

  @SpeakeasyMetadata({ data: "json, name=debtorAccount" })
  debtorAccount: AccountReference16Ch;

  @SpeakeasyMetadata({ data: "json, name=endDate" })
  endDate?: Date;

  @SpeakeasyMetadata({ data: "json, name=endToEndIdentification" })
  endToEndIdentification?: string;

  @SpeakeasyMetadata({ data: "json, name=executionRule" })
  executionRule?: ExecutionRuleEnum;

  @SpeakeasyMetadata({ data: "json, name=frequency" })
  frequency: FrequencyCodeEnum;

  @SpeakeasyMetadata({ data: "json, name=instructedAmount" })
  instructedAmount: Amount;

  @SpeakeasyMetadata({ data: "json, name=purposeCode" })
  purposeCode?: PurposeCodeEnum;

  @SpeakeasyMetadata({ data: "json, name=remittanceInformationStructured" })
  remittanceInformationStructured?: RemittanceInformationStructured;

  @SpeakeasyMetadata({ data: "json, name=remittanceInformationUnstructured" })
  remittanceInformationUnstructured?: string;

  @SpeakeasyMetadata({ data: "json, name=remittanceInformationUnstructuredArray" })
  remittanceInformationUnstructuredArray?: string[];

  @SpeakeasyMetadata({ data: "json, name=requestedExecutionDate" })
  requestedExecutionDate?: Date;

  @SpeakeasyMetadata({ data: "json, name=requestedExecutionTime" })
  requestedExecutionTime?: Date;

  @SpeakeasyMetadata({ data: "json, name=startDate" })
  startDate: Date;

  @SpeakeasyMetadata({ data: "json, name=transactionStatus" })
  transactionStatus?: TransactionStatusEnum;

  @SpeakeasyMetadata({ data: "json, name=ultimateCreditor" })
  ultimateCreditor?: string;

  @SpeakeasyMetadata({ data: "json, name=ultimateDebtor" })
  ultimateDebtor?: string;
}
