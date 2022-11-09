import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { GoogleTypePostalAddress } from "./googletypepostaladdress";
import { GoogleTypeDate } from "./googletypedate";
import { GoogleTypeDateTime } from "./googletypedatetime";
import { GoogleTypeMoney } from "./googletypemoney";


// GoogleCloudDocumentaiV1beta2DocumentEntityNormalizedValue
/** 
 * Parsed and normalized entity value.
**/
export class GoogleCloudDocumentaiV1beta2DocumentEntityNormalizedValue extends SpeakeasyBase {
  @Metadata({ data: "json, name=addressValue" })
  addressValue?: GoogleTypePostalAddress;

  @Metadata({ data: "json, name=booleanValue" })
  booleanValue?: boolean;

  @Metadata({ data: "json, name=dateValue" })
  dateValue?: GoogleTypeDate;

  @Metadata({ data: "json, name=datetimeValue" })
  datetimeValue?: GoogleTypeDateTime;

  @Metadata({ data: "json, name=floatValue" })
  floatValue?: number;

  @Metadata({ data: "json, name=integerValue" })
  integerValue?: number;

  @Metadata({ data: "json, name=moneyValue" })
  moneyValue?: GoogleTypeMoney;

  @Metadata({ data: "json, name=text" })
  text?: string;
}
