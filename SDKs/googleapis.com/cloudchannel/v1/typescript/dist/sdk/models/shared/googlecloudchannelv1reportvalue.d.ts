import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleTypeDateTime } from "./googletypedatetime";
import { GoogleTypeDate } from "./googletypedate";
import { GoogleTypeDecimal } from "./googletypedecimal";
import { GoogleTypeMoney } from "./googletypemoney";
/**
 * A single report value.
**/
export declare class GoogleCloudChannelV1ReportValue extends SpeakeasyBase {
    dateTimeValue?: GoogleTypeDateTime;
    dateValue?: GoogleTypeDate;
    decimalValue?: GoogleTypeDecimal;
    intValue?: string;
    moneyValue?: GoogleTypeMoney;
    stringValue?: string;
}
