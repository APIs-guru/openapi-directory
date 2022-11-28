import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GoogleTypePostalAddress } from "./googletypepostaladdress";
import { GoogleTypeDate } from "./googletypedate";
import { GoogleTypeDateTime } from "./googletypedatetime";
import { GoogleTypeMoney } from "./googletypemoney";



// GoogleCloudDocumentaiV1beta2DocumentEntityNormalizedValue
/** 
 * Parsed and normalized entity value.
**/
export class GoogleCloudDocumentaiV1beta2DocumentEntityNormalizedValue extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=addressValue" })
  addressValue?: GoogleTypePostalAddress;

  @SpeakeasyMetadata({ data: "json, name=booleanValue" })
  booleanValue?: boolean;

  @SpeakeasyMetadata({ data: "json, name=dateValue" })
  dateValue?: GoogleTypeDate;

  @SpeakeasyMetadata({ data: "json, name=datetimeValue" })
  datetimeValue?: GoogleTypeDateTime;

  @SpeakeasyMetadata({ data: "json, name=floatValue" })
  floatValue?: number;

  @SpeakeasyMetadata({ data: "json, name=integerValue" })
  integerValue?: number;

  @SpeakeasyMetadata({ data: "json, name=moneyValue" })
  moneyValue?: GoogleTypeMoney;

  @SpeakeasyMetadata({ data: "json, name=text" })
  text?: string;
}
