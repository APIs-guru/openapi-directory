import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { IntegratorObjectResult } from "./integratorobjectresult";
import { TopLevelActions } from "./toplevelactions";


export enum IntegratorCardPayloadResponseResponseVersionEnum {
    V1 = "v1",
    V3 = "v3"
}


// IntegratorCardPayloadResponse
/** 
 * The card details payload, sent to HubSpot by an app in response to a data fetch request when a user visits a CRM record page.
**/
export class IntegratorCardPayloadResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=allItemsLinkUrl" })
  allItemsLinkUrl?: string;

  @SpeakeasyMetadata({ data: "json, name=cardLabel" })
  cardLabel?: string;

  @SpeakeasyMetadata({ data: "json, name=responseVersion" })
  responseVersion?: IntegratorCardPayloadResponseResponseVersionEnum;

  @SpeakeasyMetadata({ data: "json, name=sections", elemType: IntegratorObjectResult })
  sections?: IntegratorObjectResult[];

  @SpeakeasyMetadata({ data: "json, name=topLevelActions" })
  topLevelActions?: TopLevelActions;

  @SpeakeasyMetadata({ data: "json, name=totalCount" })
  totalCount: number;
}
