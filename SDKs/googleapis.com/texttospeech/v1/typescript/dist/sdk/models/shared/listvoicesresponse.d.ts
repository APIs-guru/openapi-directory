import { SpeakeasyBase } from "../../../internal/utils";
import { Voice } from "./voice";
/**
 * The message returned to the client by the `ListVoices` method.
**/
export declare class ListVoicesResponse extends SpeakeasyBase {
    voices?: Voice[];
}
