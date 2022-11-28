import { SpeakeasyBase } from "../../../internal/utils";
import { IntegratorObjectResult } from "./integratorobjectresult";
import { TopLevelActions } from "./toplevelactions";
export declare enum IntegratorCardPayloadResponseResponseVersionEnum {
    V1 = "v1",
    V3 = "v3"
}
/**
 * The card details payload, sent to HubSpot by an app in response to a data fetch request when a user visits a CRM record page.
**/
export declare class IntegratorCardPayloadResponse extends SpeakeasyBase {
    allItemsLinkUrl?: string;
    cardLabel?: string;
    responseVersion?: IntegratorCardPayloadResponseResponseVersionEnum;
    sections?: IntegratorObjectResult[];
    topLevelActions?: TopLevelActions;
    totalCount: number;
}
