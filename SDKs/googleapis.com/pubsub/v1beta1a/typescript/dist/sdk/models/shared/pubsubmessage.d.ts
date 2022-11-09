import { SpeakeasyBase } from "../../../internal/utils/utils";
import { Label } from "./label";
/**
 * A message data and its labels.
**/
export declare class PubsubMessage extends SpeakeasyBase {
    data?: string;
    label?: Label[];
    messageId?: string;
    publishTime?: string;
}
