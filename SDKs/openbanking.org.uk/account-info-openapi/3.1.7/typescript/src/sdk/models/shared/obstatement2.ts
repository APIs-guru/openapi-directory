import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { ObActiveOrHistoricCurrencyAndAmount8 } from "./obactiveorhistoriccurrencyandamount8";
import { ObCreditDebitCode0Enum } from "./obcreditdebitcode0enum";
import { ObActiveOrHistoricCurrencyAndAmount5 } from "./obactiveorhistoriccurrencyandamount5";
import { ObActiveOrHistoricCurrencyAndAmount6 } from "./obactiveorhistoriccurrencyandamount6";
import { ObCreditDebitCode0Enum } from "./obcreditdebitcode0enum";
import { ObActiveOrHistoricCurrencyAndAmount7 } from "./obactiveorhistoriccurrencyandamount7";
import { ObCreditDebitCode0Enum } from "./obcreditdebitcode0enum";
import { ObExternalStatementType1CodeEnum } from "./obexternalstatementtype1codeenum";


// ObStatement2StatementAmount
/** 
 * Set of elements used to provide details of a generic amount for the statement resource.
**/
export class ObStatement2StatementAmount extends SpeakeasyBase {
  @Metadata({ data: "json, name=Amount" })
  amount: ObActiveOrHistoricCurrencyAndAmount8;

  @Metadata({ data: "json, name=CreditDebitIndicator" })
  creditDebitIndicator: ObCreditDebitCode0Enum;

  @Metadata({ data: "json, name=Type" })
  type: string;
}


// ObStatement2StatementBenefit
/** 
 * Set of elements used to provide details of a benefit or reward amount for the statement resource.
**/
export class ObStatement2StatementBenefit extends SpeakeasyBase {
  @Metadata({ data: "json, name=Amount" })
  amount: ObActiveOrHistoricCurrencyAndAmount5;

  @Metadata({ data: "json, name=Type" })
  type: string;
}


// ObStatement2StatementDateTime
/** 
 * Set of elements used to provide details of a generic date time for the statement resource.
**/
export class ObStatement2StatementDateTime extends SpeakeasyBase {
  @Metadata({ data: "json, name=DateTime" })
  dateTime: Date;

  @Metadata({ data: "json, name=Type" })
  type: string;
}


// ObStatement2StatementFee
/** 
 * Set of elements used to provide details of a fee for the statement resource.
**/
export class ObStatement2StatementFee extends SpeakeasyBase {
  @Metadata({ data: "json, name=Amount" })
  amount: ObActiveOrHistoricCurrencyAndAmount6;

  @Metadata({ data: "json, name=CreditDebitIndicator" })
  creditDebitIndicator: ObCreditDebitCode0Enum;

  @Metadata({ data: "json, name=Description" })
  description?: string;

  @Metadata({ data: "json, name=Frequency" })
  frequency?: string;

  @Metadata({ data: "json, name=Rate" })
  rate?: number;

  @Metadata({ data: "json, name=RateType" })
  rateType?: string;

  @Metadata({ data: "json, name=Type" })
  type: string;
}


// ObStatement2StatementInterest
/** 
 * Set of elements used to provide details of a generic interest amount related to the statement resource.
**/
export class ObStatement2StatementInterest extends SpeakeasyBase {
  @Metadata({ data: "json, name=Amount" })
  amount: ObActiveOrHistoricCurrencyAndAmount7;

  @Metadata({ data: "json, name=CreditDebitIndicator" })
  creditDebitIndicator: ObCreditDebitCode0Enum;

  @Metadata({ data: "json, name=Description" })
  description?: string;

  @Metadata({ data: "json, name=Frequency" })
  frequency?: string;

  @Metadata({ data: "json, name=Rate" })
  rate?: number;

  @Metadata({ data: "json, name=RateType" })
  rateType?: string;

  @Metadata({ data: "json, name=Type" })
  type: string;
}


// ObStatement2StatementRate
/** 
 * Set of elements used to provide details of a generic rate related to the statement resource.
**/
export class ObStatement2StatementRate extends SpeakeasyBase {
  @Metadata({ data: "json, name=Rate" })
  rate: string;

  @Metadata({ data: "json, name=Type" })
  type: string;
}


// ObStatement2StatementValue
/** 
 * Set of elements used to provide details of a generic number value related to the statement resource.
**/
export class ObStatement2StatementValue extends SpeakeasyBase {
  @Metadata({ data: "json, name=Type" })
  type: string;

  @Metadata({ data: "json, name=Value" })
  value: string;
}


// ObStatement2
/** 
 * Provides further details on a statement resource.
**/
export class ObStatement2 extends SpeakeasyBase {
  @Metadata({ data: "json, name=AccountId" })
  accountId: string;

  @Metadata({ data: "json, name=CreationDateTime" })
  creationDateTime: Date;

  @Metadata({ data: "json, name=EndDateTime" })
  endDateTime: Date;

  @Metadata({ data: "json, name=StartDateTime" })
  startDateTime: Date;

  @Metadata({ data: "json, name=StatementAmount", elemType: shared.ObStatement2StatementAmount })
  statementAmount?: ObStatement2StatementAmount[];

  @Metadata({ data: "json, name=StatementBenefit", elemType: shared.ObStatement2StatementBenefit })
  statementBenefit?: ObStatement2StatementBenefit[];

  @Metadata({ data: "json, name=StatementDateTime", elemType: shared.ObStatement2StatementDateTime })
  statementDateTime?: ObStatement2StatementDateTime[];

  @Metadata({ data: "json, name=StatementDescription" })
  statementDescription?: string[];

  @Metadata({ data: "json, name=StatementFee", elemType: shared.ObStatement2StatementFee })
  statementFee?: ObStatement2StatementFee[];

  @Metadata({ data: "json, name=StatementId" })
  statementId?: string;

  @Metadata({ data: "json, name=StatementInterest", elemType: shared.ObStatement2StatementInterest })
  statementInterest?: ObStatement2StatementInterest[];

  @Metadata({ data: "json, name=StatementRate", elemType: shared.ObStatement2StatementRate })
  statementRate?: ObStatement2StatementRate[];

  @Metadata({ data: "json, name=StatementReference" })
  statementReference?: string;

  @Metadata({ data: "json, name=StatementValue", elemType: shared.ObStatement2StatementValue })
  statementValue?: ObStatement2StatementValue[];

  @Metadata({ data: "json, name=Type" })
  type: ObExternalStatementType1CodeEnum;
}
