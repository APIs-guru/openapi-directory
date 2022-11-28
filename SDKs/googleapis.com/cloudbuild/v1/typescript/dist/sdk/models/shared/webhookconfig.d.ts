import { SpeakeasyBase } from "../../../internal/utils";
export declare enum WebhookConfigStateEnum {
    StateUnspecified = "STATE_UNSPECIFIED",
    Ok = "OK",
    SecretDeleted = "SECRET_DELETED"
}
/**
 * WebhookConfig describes the configuration of a trigger that creates a build whenever a webhook is sent to a trigger's webhook URL.
**/
export declare class WebhookConfig extends SpeakeasyBase {
    secret?: string;
    state?: WebhookConfigStateEnum;
}
