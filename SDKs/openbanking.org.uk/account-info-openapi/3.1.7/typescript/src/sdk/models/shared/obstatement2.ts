import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ObActiveOrHistoricCurrencyAndAmount8 } from "./obactiveorhistoriccurrencyandamount8";
import { ObCreditDebitCode0Enum } from "./obcreditdebitcode0enum";
import { ObActiveOrHistoricCurrencyAndAmount5 } from "./obactiveorhistoriccurrencyandamount5";
import { ObActiveOrHistoricCurrencyAndAmount6 } from "./obactiveorhistoriccurrencyandamount6";
import { ObActiveOrHistoricCurrencyAndAmount7 } from "./obactiveorhistoriccurrencyandamount7";
import { ObExternalStatementType1CodeEnum } from "./obexternalstatementtype1codeenum";



// ObStatement2StatementAmount
/** 
 * Set of elements used to provide details of a generic amount for the statement resource.
**/
export class ObStatement2StatementAmount extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Amount" })
  amount: ObActiveOrHistoricCurrencyAndAmount8;

  @SpeakeasyMetadata({ data: "json, name=CreditDebitIndicator" })
  creditDebitIndicator: ObCreditDebitCode0Enum;

  @SpeakeasyMetadata({ data: "json, name=Type" })
  type: string;
}


// ObStatement2StatementBenefit
/** 
 * Set of elements used to provide details of a benefit or reward amount for the statement resource.
**/
export class ObStatement2StatementBenefit extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Amount" })
  amount: ObActiveOrHistoricCurrencyAndAmount5;

  @SpeakeasyMetadata({ data: "json, name=Type" })
  type: string;
}


// ObStatement2StatementDateTime
/** 
 * Set of elements used to provide details of a generic date time for the statement resource.
**/
export class ObStatement2StatementDateTime extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=DateTime" })
  dateTime: Date;

  @SpeakeasyMetadata({ data: "json, name=Type" })
  type: string;
}


// ObStatement2StatementFee
/** 
 * Set of elements used to provide details of a fee for the statement resource.
**/
export class ObStatement2StatementFee extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Amount" })
  amount: ObActiveOrHistoricCurrencyAndAmount6;

  @SpeakeasyMetadata({ data: "json, name=CreditDebitIndicator" })
  creditDebitIndicator: ObCreditDebitCode0Enum;

  @SpeakeasyMetadata({ data: "json, name=Description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=Frequency" })
  frequency?: string;

  @SpeakeasyMetadata({ data: "json, name=Rate" })
  rate?: number;

  @SpeakeasyMetadata({ data: "json, name=RateType" })
  rateType?: string;

  @SpeakeasyMetadata({ data: "json, name=Type" })
  type: string;
}


// ObStatement2StatementInterest
/** 
 * Set of elements used to provide details of a generic interest amount related to the statement resource.
**/
export class ObStatement2StatementInterest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Amount" })
  amount: ObActiveOrHistoricCurrencyAndAmount7;

  @SpeakeasyMetadata({ data: "json, name=CreditDebitIndicator" })
  creditDebitIndicator: ObCreditDebitCode0Enum;

  @SpeakeasyMetadata({ data: "json, name=Description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=Frequency" })
  frequency?: string;

  @SpeakeasyMetadata({ data: "json, name=Rate" })
  rate?: number;

  @SpeakeasyMetadata({ data: "json, name=RateType" })
  rateType?: string;

  @SpeakeasyMetadata({ data: "json, name=Type" })
  type: string;
}


// ObStatement2StatementRate
/** 
 * Set of elements used to provide details of a generic rate related to the statement resource.
**/
export class ObStatement2StatementRate extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Rate" })
  rate: string;

  @SpeakeasyMetadata({ data: "json, name=Type" })
  type: string;
}


// ObStatement2StatementValue
/** 
 * Set of elements used to provide details of a generic number value related to the statement resource.
**/
export class ObStatement2StatementValue extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Type" })
  type: string;

  @SpeakeasyMetadata({ data: "json, name=Value" })
  value: string;
}


// ObStatement2
/** 
 * Provides further details on a statement resource.
**/
export class ObStatement2 extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=AccountId" })
  accountId: string;

  @SpeakeasyMetadata({ data: "json, name=CreationDateTime" })
  creationDateTime: Date;

  @SpeakeasyMetadata({ data: "json, name=EndDateTime" })
  endDateTime: Date;

  @SpeakeasyMetadata({ data: "json, name=StartDateTime" })
  startDateTime: Date;

  @SpeakeasyMetadata({ data: "json, name=StatementAmount", elemType: ObStatement2StatementAmount })
  statementAmount?: ObStatement2StatementAmount[];

  @SpeakeasyMetadata({ data: "json, name=StatementBenefit", elemType: ObStatement2StatementBenefit })
  statementBenefit?: ObStatement2StatementBenefit[];

  @SpeakeasyMetadata({ data: "json, name=StatementDateTime", elemType: ObStatement2StatementDateTime })
  statementDateTime?: ObStatement2StatementDateTime[];

  @SpeakeasyMetadata({ data: "json, name=StatementDescription" })
  statementDescription?: string[];

  @SpeakeasyMetadata({ data: "json, name=StatementFee", elemType: ObStatement2StatementFee })
  statementFee?: ObStatement2StatementFee[];

  @SpeakeasyMetadata({ data: "json, name=StatementId" })
  statementId?: string;

  @SpeakeasyMetadata({ data: "json, name=StatementInterest", elemType: ObStatement2StatementInterest })
  statementInterest?: ObStatement2StatementInterest[];

  @SpeakeasyMetadata({ data: "json, name=StatementRate", elemType: ObStatement2StatementRate })
  statementRate?: ObStatement2StatementRate[];

  @SpeakeasyMetadata({ data: "json, name=StatementReference" })
  statementReference?: string;

  @SpeakeasyMetadata({ data: "json, name=StatementValue", elemType: ObStatement2StatementValue })
  statementValue?: ObStatement2StatementValue[];

  @SpeakeasyMetadata({ data: "json, name=Type" })
  type: ObExternalStatementType1CodeEnum;
}
