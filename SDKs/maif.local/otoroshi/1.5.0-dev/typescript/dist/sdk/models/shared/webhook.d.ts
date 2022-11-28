import { SpeakeasyBase } from "../../../internal/utils";
/**
 * A callback URL where events are posted
**/
export declare class Webhook extends SpeakeasyBase {
    headers: Map<string, string>;
    url: string;
}
