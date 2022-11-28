import { SpeakeasyBase } from "../../../internal/utils";
import { HrefType } from "./hreftype";
import { AccountAccess } from "./accountaccess";
import { ConsentStatusEnum } from "./consentstatusenum";
/**
 * Body of the JSON response for a successfull get consent request.
**/
export declare class ConsentInformationResponse200Json extends SpeakeasyBase {
    links?: Map<string, HrefType>;
    access: AccountAccess;
    consentStatus: ConsentStatusEnum;
    frequencyPerDay: number;
    lastActionDate: Date;
    recurringIndicator: boolean;
    validUntil: Date;
}
