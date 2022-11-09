import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { HrefType } from "./hreftype";
import { AccountAccess } from "./accountaccess";
import { ConsentStatusEnum } from "./consentstatusenum";


// ConsentInformationResponse200Json
/** 
 * Body of the JSON response for a successfull get consent request.
**/
export class ConsentInformationResponse200Json extends SpeakeasyBase {
  @Metadata({ data: "json, name=_links", elemType: shared.HrefType })
  links?: Map<string, HrefType>;

  @Metadata({ data: "json, name=access" })
  access: AccountAccess;

  @Metadata({ data: "json, name=consentStatus" })
  consentStatus: ConsentStatusEnum;

  @Metadata({ data: "json, name=frequencyPerDay" })
  frequencyPerDay: number;

  @Metadata({ data: "json, name=lastActionDate" })
  lastActionDate: Date;

  @Metadata({ data: "json, name=recurringIndicator" })
  recurringIndicator: boolean;

  @Metadata({ data: "json, name=validUntil" })
  validUntil: Date;
}
