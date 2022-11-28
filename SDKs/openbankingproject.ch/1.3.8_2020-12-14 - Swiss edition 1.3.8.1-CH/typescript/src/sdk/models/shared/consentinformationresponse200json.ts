import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { HrefType } from "./hreftype";
import { AccountAccess } from "./accountaccess";
import { ConsentStatusEnum } from "./consentstatusenum";



// ConsentInformationResponse200Json
/** 
 * Body of the JSON response for a successfull get consent request.
**/
export class ConsentInformationResponse200Json extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=_links", elemType: HrefType })
  links?: Map<string, HrefType>;

  @SpeakeasyMetadata({ data: "json, name=access" })
  access: AccountAccess;

  @SpeakeasyMetadata({ data: "json, name=consentStatus" })
  consentStatus: ConsentStatusEnum;

  @SpeakeasyMetadata({ data: "json, name=frequencyPerDay" })
  frequencyPerDay: number;

  @SpeakeasyMetadata({ data: "json, name=lastActionDate" })
  lastActionDate: Date;

  @SpeakeasyMetadata({ data: "json, name=recurringIndicator" })
  recurringIndicator: boolean;

  @SpeakeasyMetadata({ data: "json, name=validUntil" })
  validUntil: Date;
}
