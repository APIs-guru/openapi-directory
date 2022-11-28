import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleTypePostalAddress } from "./googletypepostaladdress";
import { GoogleTypeDate } from "./googletypedate";
import { GoogleTypeDateTime } from "./googletypedatetime";
import { GoogleTypeMoney } from "./googletypemoney";
/**
 * Parsed and normalized entity value.
**/
export declare class GoogleCloudDocumentaiV1DocumentEntityNormalizedValue extends SpeakeasyBase {
    addressValue?: GoogleTypePostalAddress;
    booleanValue?: boolean;
    dateValue?: GoogleTypeDate;
    datetimeValue?: GoogleTypeDateTime;
    floatValue?: number;
    integerValue?: number;
    moneyValue?: GoogleTypeMoney;
    text?: string;
}
