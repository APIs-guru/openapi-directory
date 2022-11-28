import { SpeakeasyBase } from "../../../internal/utils";
import { Strategy } from "./strategy";
/**
 * Stage specifies a location to which to deploy.
**/
export declare class Stage extends SpeakeasyBase {
    profiles?: string[];
    strategy?: Strategy;
    targetId?: string;
}
