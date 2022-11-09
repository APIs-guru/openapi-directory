import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { IntegratorObjectResult } from "./integratorobjectresult";
import { TopLevelActions } from "./toplevelactions";

export enum IntegratorCardPayloadResponseResponseVersionEnum {
    V1 = "v1"
,    V3 = "v3"
}


// IntegratorCardPayloadResponse
/** 
 * The card details payload, sent to HubSpot by an app in response to a data fetch request when a user visits a CRM record page.
**/
export class IntegratorCardPayloadResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=allItemsLinkUrl" })
  allItemsLinkUrl?: string;

  @Metadata({ data: "json, name=cardLabel" })
  cardLabel?: string;

  @Metadata({ data: "json, name=responseVersion" })
  responseVersion?: IntegratorCardPayloadResponseResponseVersionEnum;

  @Metadata({ data: "json, name=sections", elemType: shared.IntegratorObjectResult })
  sections?: IntegratorObjectResult[];

  @Metadata({ data: "json, name=topLevelActions" })
  topLevelActions?: TopLevelActions;

  @Metadata({ data: "json, name=totalCount" })
  totalCount: number;
}
