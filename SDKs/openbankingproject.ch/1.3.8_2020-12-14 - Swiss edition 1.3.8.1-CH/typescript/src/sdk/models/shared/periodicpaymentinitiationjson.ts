import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { ChargeBearerEnum } from "./chargebearerenum";
import { AccountReference16Ch } from "./accountreference16ch";
import { Address } from "./address";
import { CreditorAgent7Ch } from "./creditoragent7ch";
import { DayOfExecutionEnum } from "./dayofexecutionenum";
import { AccountReference16Ch } from "./accountreference16ch";
import { DebtorAgent7Ch } from "./debtoragent7ch";
import { Amount } from "./amount";
import { ExchangeRateInformation1 } from "./exchangerateinformation1";
import { ExecutionRuleEnum } from "./executionruleenum";
import { FrequencyCodeEnum } from "./frequencycodeenum";
import { Amount } from "./amount";
import { PurposeCodeEnum } from "./purposecodeenum";
import { RemittanceInformationStructured } from "./remittanceinformationstructured";
import { ExternalServiceLevel1CodeEnum } from "./externalservicelevel1codeenum";


// PeriodicPaymentInitiationJson
/** 
 * Generic Body for a periodic payment initation via JSON.
 * 
 * This generic JSON body can be used to represent valid periodic payment initiations for the following JSON based payment product,
 * which where defined in the Implementation Guidelines:
 * 
 *   * domestic-swiss-credit-transfers-isr
 *   * domestic-swiss-credit-transfers
 *   * domestic-swiss-credit-transfers-qr
 *   * domestic-swiss-foreign-credit-transfers
 *   * swiss-sepa-credit-transfers
 *   * swiss-cross-border-credit-transfers
 * 
 * For the convenience of the implementer additional which are already predefinded in the Implementation Guidelines
 * are included (but commented in source code), such that an ASPSP may add them easily.
 * 
 * Take care: Since the format is intended to fit for all payment products
 * there are additional conditions which are NOT covered by this specification.
 * Please check the SIX Swiss Payment Standards implementation guidelines for details.
 * 
 * 
 * The following data element are depending on the actual payment product available (in source code):
 * 
 * <table style="width:100%">
 * <tr><td></td><td>Payment Type 1: ISR</td><td>Payment Type 3: IBAN/postal account and IID/BIC</td><td>Payment Type 3: QR-bill</td><td>Payment Type 4: Foreign currency</td><td>Payment Type 5: Foreign SEPA</td><td>Payment Type 6: Foreign</td></tr>
 * <tr><td>CH Domestic Data Element</td><td>domestic-swiss-credit-transfers-isr</td><td>domestic-swiss-credit-transfers</td><td>domestic-swiss-credit-transfers-qr</td><td>domestic-swiss-foreign-credit-transfers</td><td>swiss-sepa-credit-transfers</td><td>swiss-cross-border-credit-transfers</td></tr>
 * <tr><td>endToEndIdentification</td><td>mandatory</td><td>mandatory</td><td>mandatory</td><td>mandatory</td><td>mandatory</td><td>mandatory</td></tr>
 * <tr><td>instructionIdentification</td><td>n.a.</td><td>n.a.</td><td>n.a.</td><td>n.a.</td><td>n.a.</td><td>n.a.</td></tr>
 * <tr><td>debtorAccount (incl. type)</td><td>mandatory</td><td>mandatory</td><td>mandatory</td><td>mandatory</td><td>mandatory</td><td>mandatory</td></tr>
 * <tr><td>debtorAgent</td><td>mandatory</td><td>mandatory</td><td>mandatory</td><td>mandatory</td><td>mandatory</td><td>optional</td></tr>
 * <tr><td>debtorName</td><td>mandatory</td><td>mandatory</td><td>mandatory</td><td>mandatory</td><td>mandatory</td><td>mandatory</td></tr>
 * <tr><td>debtorId</td><td>optional 3)</td><td>optional 3)</td><td>optional 3)</td><td>optional 3)</td><td>optional 3)</td><td>optional 3)</td></tr>
 * <tr><td>ultimateDebtor</td><td>optional</td><td>optional</td><td>optional</td><td>optional</td><td>optional</td><td>optional</td></tr>
 * <tr><td>instructedAmount (incl. currency)</td><td>mandatory</td><td>dependent 1)</td><td>dependent 1)</td><td>dependent 1)</td><td>dependent 1)</td><td>dependent 1)</td></tr>
 * <tr><td>equivalentAmount</td><td>n.a.</td><td>dependent 1)</td><td>dependent 1)</td><td>dependent 1)</td><td>dependent 1)</td><td>dependent 1)</td></tr>
 * <tr><td>transactionCurrency</td><td>n.a.</td><td>dependent 1)</td><td>dependent 1)</td><td>dependent 1)</td><td>dependent 1)</td><td>dependent 1)</td></tr>
 * <tr><td>exchangeRateInformation</td><td>n.a.</td><td>optional 2)</td><td>optional 2)</td><td>optional 2)</td><td>optional 2)</td><td>optional 2)</td></tr>
 * <tr><td>creditorAccount</td><td>mandatory</td><td>mandatory</td><td>mandatory 8)</td><td>mandatory</td><td>mandatory</td><td>mandatory</td></tr>
 * <tr><td>creditorAgent</td><td>n.a.</td><td>dependent 4)</td><td>dependent 4)</td><td>dependent 4)</td><td>dependent 4)</td><td>dependent 4)</td></tr>
 * <tr><td>creditorAgentName</td><td>n.a.</td><td>n.a.</td><td>n.a.</td><td>dependent 5)</td><td>n.a.</td><td>dependent 5)</td></tr>
 * <tr><td>creditorName</td><td>mandatory</td><td>mandatory</td><td>mandatory</td><td>mandatory</td><td>mandatory</td><td>mandatory</td></tr>
 * <tr><td>creditorId</td><td>n.a.</td><td>optional</td><td>optional</td><td>optional</td><td>optional</td><td>optional</td></tr>
 * <tr><td>creditorAddress</td><td>optional</td><td>optional</td><td>optional</td><td>optional</td><td>optional</td><td>optional</td></tr>
 * <tr><td>creditorNameAndAddress</td><td>n.a.</td><td>dependent</td><td>dependent</td><td>dependent</td><td>dependent</td><td>dependent</td></tr>
 * <tr><td>ultimateCreditor</td><td>n.a.</td><td>optional</td><td>n.a. (for future use)</td><td>optional</td><td>optional</td><td>optional</td></tr>
 * <tr><td>chargeBearer</td><td>n.a.</td><td>optional</td><td>optional</td><td>optional</td><td>mandatory</td><td>optional</td></tr>
 * <tr><td>purposeCode</td><td>optional</td><td>optional</td><td>optional</td><td>optional</td><td>optional</td><td>optional</td></tr>
 * <tr><td>serviceLevel</td><td>n.a.</td><td>optional</td><td>optional</td><td>optional</td><td>mandatory</td><td>optional</td></tr>
 * <tr><td>remittanceInformationUnstructured</td><td>n.a.</td><td>optional</td><td>n.a.</td><td>optional</td><td>optional</td><td>optional</td></tr>
 * <tr><td>remittanceInformationUnstructuredArray</td><td>n.a.</td><td>n.a.</td><td>n.a.</td><td>n.a.</td><td>n.a.</td><td>n.a.</td></tr>
 * <tr><td>remittanceInformationStructured</td><td>mandatory</td><td>optional</td><td>mandatory 6)</td><td>optional</td><td>optional</td><td>optional</td></tr>
 * <tr><td>remittanceInformationStructuredArray</td><td>n.a.</td><td>n.a.</td><td>n.a.</td><td>n.a.</td><td>n.a.</td><td>n.a.</td></tr>
 * <tr><td>requestedExecutionDate</td><td>n.a.</td><td>n.a.</td><td>n.a.</td><td>n.a.</td><td>n.a.</td><td>n.a.</td></tr>
 * <tr><td>requestedExecutionTime</td><td>n.a.</td><td>n.a.</td><td>n.a.</td><td>n.a.</td><td>n.a.</td><td>n.a.</td></tr>
 * <tr><td>intermediaryAgent</td><td>n.a.</td><td>n.a.</td><td>n.a.</td><td>optional 2)</td><td>n.a.</td><td>optional 2)</td></tr>
 * <tr><td>startDate</td><td>mandatory</td><td>mandatory</td><td>mandatory</td><td>mandatory</td><td>mandatory</td><td>mandatory</td></tr>
 * <tr><td>endDate</td><td>optional</td><td>optional</td><td>optional</td><td>optional</td><td>optional</td><td>optional</td></tr>
 * <tr><td>executionRule</td><td>optional</td><td>optional</td><td>optional</td><td>optional</td><td>optional</td><td>optional</td></tr>
 * <tr><td>frequency</td><td>mandatory</td><td>mandatory</td><td>mandatory</td><td>mandatory</td><td>mandatory</td><td>mandatory</td></tr>
 * <tr><td>dayOfExecution</td><td>conditional</td><td>conditional</td><td>conditional</td><td>conditional</td><td>conditional</td><td>conditional</td></tr>
 * </table>
 * 
 * Footnotes from the table:
 * 1) This element may only be used by agreement with the instructed financial institution.
 * 2) The element may only be used in consultation with the financial institution commissioned.
 * 3) The element is currently ignored by financial institutions.
 * 4) Dependence on creditorAccount, see SIX Swiss Payments Standards implementation guidelines.
 * 5) Type 4(V3), 6(V2, V3): Must be present. Type 4(V2): May be present. Other species: May not be present.
 * 6) QR-reference, creditor reference or IPI reference
 * 7) currencyOfTransfer is a subfield of equivalentAmount and may only be used if equivalentAmount is used instead of instructedAmount.
 * 8) QR-IBAN (CH/LI) must be present.
 * 
 * IMPORTANT: In this API definition the following holds:
 *   *  All data elements mentioned above are defined, but some of them are commented,
 *     i.e. they are only visible in the source code and can be used by uncommenting them.
 *   * Data elements which are mandatory in the table above for all payment products
 *     are set to be mandatory in this specification.
 *   * Data elements which are indicated in the table above as n.a. for all payment products are commented in the source code.
 *   * Data elements which are indicated to be option, conditional or mandatory for at least one payment product
 *     in the table above are set to be optional in the s specification except the case where all are definde to be mandatory.
 *   * Data element which are inticated to be n.a. can be used by the ASPS if needed.
 *     In this case uncomment tthe the relatetd lines in the source code.
 *   * If one uses this data types for some payment products he has to ensure that the used data type is
 *     valid according to the underlying payment product, e.g. by some appropriate validations.
 * 
**/
export class PeriodicPaymentInitiationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=chargeBearer" })
  chargeBearer?: ChargeBearerEnum;

  @Metadata({ data: "json, name=creditorAccount" })
  creditorAccount: AccountReference16Ch;

  @Metadata({ data: "json, name=creditorAddress" })
  creditorAddress?: Address;

  @Metadata({ data: "json, name=creditorAgent" })
  creditorAgent?: CreditorAgent7Ch;

  @Metadata({ data: "json, name=creditorAgentName" })
  creditorAgentName?: string;

  @Metadata({ data: "json, name=creditorId" })
  creditorId?: string;

  @Metadata({ data: "json, name=creditorName" })
  creditorName: string;

  @Metadata({ data: "json, name=creditorNameAndAddress" })
  creditorNameAndAddress?: string;

  @Metadata({ data: "json, name=dayOfExecution" })
  dayOfExecution?: DayOfExecutionEnum;

  @Metadata({ data: "json, name=debtorAccount" })
  debtorAccount: AccountReference16Ch;

  @Metadata({ data: "json, name=debtorAgent" })
  debtorAgent?: DebtorAgent7Ch;

  @Metadata({ data: "json, name=debtorId" })
  debtorId?: string;

  @Metadata({ data: "json, name=debtorName" })
  debtorName: string;

  @Metadata({ data: "json, name=endDate" })
  endDate?: Date;

  @Metadata({ data: "json, name=endToEndIdentification" })
  endToEndIdentification: string;

  @Metadata({ data: "json, name=equivalentAmount" })
  equivalentAmount?: Amount;

  @Metadata({ data: "json, name=exchangeRateInformation" })
  exchangeRateInformation?: ExchangeRateInformation1;

  @Metadata({ data: "json, name=executionRule" })
  executionRule?: ExecutionRuleEnum;

  @Metadata({ data: "json, name=frequency" })
  frequency: FrequencyCodeEnum;

  @Metadata({ data: "json, name=instructedAmount" })
  instructedAmount?: Amount;

  @Metadata({ data: "json, name=intermediaryAgent" })
  intermediaryAgent?: string;

  @Metadata({ data: "json, name=purposeCode" })
  purposeCode?: PurposeCodeEnum;

  @Metadata({ data: "json, name=remittanceInformationStructured" })
  remittanceInformationStructured?: RemittanceInformationStructured;

  @Metadata({ data: "json, name=remittanceInformationUnstructured" })
  remittanceInformationUnstructured?: string;

  @Metadata({ data: "json, name=serviceLevel" })
  serviceLevel?: ExternalServiceLevel1CodeEnum;

  @Metadata({ data: "json, name=startDate" })
  startDate: Date;

  @Metadata({ data: "json, name=transactionCurrency" })
  transactionCurrency?: string;

  @Metadata({ data: "json, name=ultimateCreditor" })
  ultimateCreditor?: string;

  @Metadata({ data: "json, name=ultimateDebtor" })
  ultimateDebtor?: string;
}
