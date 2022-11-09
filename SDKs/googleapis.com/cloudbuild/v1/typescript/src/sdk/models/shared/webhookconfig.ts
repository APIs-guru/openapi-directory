import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum WebhookConfigStateEnum {
    StateUnspecified = "STATE_UNSPECIFIED"
,    Ok = "OK"
,    SecretDeleted = "SECRET_DELETED"
}


// WebhookConfig
/** 
 * WebhookConfig describes the configuration of a trigger that creates a build whenever a webhook is sent to a trigger's webhook URL.
**/
export class WebhookConfig extends SpeakeasyBase {
  @Metadata({ data: "json, name=secret" })
  secret?: string;

  @Metadata({ data: "json, name=state" })
  state?: WebhookConfigStateEnum;
}
