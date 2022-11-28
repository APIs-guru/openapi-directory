import { SpeakeasyBase } from "../../../internal/utils";
import { Target } from "./target";
/**
 * A request for Firestore.Listen
**/
export declare class ListenRequest extends SpeakeasyBase {
    addTarget?: Target;
    labels?: Map<string, string>;
    removeTarget?: number;
}
