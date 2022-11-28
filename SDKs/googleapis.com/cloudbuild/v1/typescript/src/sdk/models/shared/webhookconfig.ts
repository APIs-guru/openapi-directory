import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum WebhookConfigStateEnum {
    StateUnspecified = "STATE_UNSPECIFIED",
    Ok = "OK",
    SecretDeleted = "SECRET_DELETED"
}


// WebhookConfig
/** 
 * WebhookConfig describes the configuration of a trigger that creates a build whenever a webhook is sent to a trigger's webhook URL.
**/
export class WebhookConfig extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=secret" })
  secret?: string;

  @SpeakeasyMetadata({ data: "json, name=state" })
  state?: WebhookConfigStateEnum;
}
