import { SpeakeasyBase } from "../../../internal/utils";
import { ObActiveOrHistoricCurrencyAndAmount8 } from "./obactiveorhistoriccurrencyandamount8";
import { ObCreditDebitCode0Enum } from "./obcreditdebitcode0enum";
import { ObActiveOrHistoricCurrencyAndAmount5 } from "./obactiveorhistoriccurrencyandamount5";
import { ObActiveOrHistoricCurrencyAndAmount6 } from "./obactiveorhistoriccurrencyandamount6";
import { ObActiveOrHistoricCurrencyAndAmount7 } from "./obactiveorhistoriccurrencyandamount7";
import { ObExternalStatementType1CodeEnum } from "./obexternalstatementtype1codeenum";
/**
 * Set of elements used to provide details of a generic amount for the statement resource.
**/
export declare class ObStatement2StatementAmount extends SpeakeasyBase {
    amount: ObActiveOrHistoricCurrencyAndAmount8;
    creditDebitIndicator: ObCreditDebitCode0Enum;
    type: string;
}
/**
 * Set of elements used to provide details of a benefit or reward amount for the statement resource.
**/
export declare class ObStatement2StatementBenefit extends SpeakeasyBase {
    amount: ObActiveOrHistoricCurrencyAndAmount5;
    type: string;
}
/**
 * Set of elements used to provide details of a generic date time for the statement resource.
**/
export declare class ObStatement2StatementDateTime extends SpeakeasyBase {
    dateTime: Date;
    type: string;
}
/**
 * Set of elements used to provide details of a fee for the statement resource.
**/
export declare class ObStatement2StatementFee extends SpeakeasyBase {
    amount: ObActiveOrHistoricCurrencyAndAmount6;
    creditDebitIndicator: ObCreditDebitCode0Enum;
    description?: string;
    frequency?: string;
    rate?: number;
    rateType?: string;
    type: string;
}
/**
 * Set of elements used to provide details of a generic interest amount related to the statement resource.
**/
export declare class ObStatement2StatementInterest extends SpeakeasyBase {
    amount: ObActiveOrHistoricCurrencyAndAmount7;
    creditDebitIndicator: ObCreditDebitCode0Enum;
    description?: string;
    frequency?: string;
    rate?: number;
    rateType?: string;
    type: string;
}
/**
 * Set of elements used to provide details of a generic rate related to the statement resource.
**/
export declare class ObStatement2StatementRate extends SpeakeasyBase {
    rate: string;
    type: string;
}
/**
 * Set of elements used to provide details of a generic number value related to the statement resource.
**/
export declare class ObStatement2StatementValue extends SpeakeasyBase {
    type: string;
    value: string;
}
/**
 * Provides further details on a statement resource.
**/
export declare class ObStatement2 extends SpeakeasyBase {
    accountId: string;
    creationDateTime: Date;
    endDateTime: Date;
    startDateTime: Date;
    statementAmount?: ObStatement2StatementAmount[];
    statementBenefit?: ObStatement2StatementBenefit[];
    statementDateTime?: ObStatement2StatementDateTime[];
    statementDescription?: string[];
    statementFee?: ObStatement2StatementFee[];
    statementId?: string;
    statementInterest?: ObStatement2StatementInterest[];
    statementRate?: ObStatement2StatementRate[];
    statementReference?: string;
    statementValue?: ObStatement2StatementValue[];
    type: ObExternalStatementType1CodeEnum;
}
