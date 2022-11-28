import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GoogleTypeDateTime } from "./googletypedatetime";
import { GoogleTypeDate } from "./googletypedate";
import { GoogleTypeDecimal } from "./googletypedecimal";
import { GoogleTypeMoney } from "./googletypemoney";



// GoogleCloudChannelV1ReportValue
/** 
 * A single report value.
**/
export class GoogleCloudChannelV1ReportValue extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=dateTimeValue" })
  dateTimeValue?: GoogleTypeDateTime;

  @SpeakeasyMetadata({ data: "json, name=dateValue" })
  dateValue?: GoogleTypeDate;

  @SpeakeasyMetadata({ data: "json, name=decimalValue" })
  decimalValue?: GoogleTypeDecimal;

  @SpeakeasyMetadata({ data: "json, name=intValue" })
  intValue?: string;

  @SpeakeasyMetadata({ data: "json, name=moneyValue" })
  moneyValue?: GoogleTypeMoney;

  @SpeakeasyMetadata({ data: "json, name=stringValue" })
  stringValue?: string;
}
