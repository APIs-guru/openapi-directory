import { SpeakeasyBase } from "../../../internal/utils/utils";
/**
 * A message data and its attributes. The message payload must not be empty; it must contain either a non-empty data field, or at least one attribute.
**/
export declare class PubsubMessage extends SpeakeasyBase {
    attributes?: Map<string, string>;
    data?: string;
    messageId?: string;
    publishTime?: string;
}
