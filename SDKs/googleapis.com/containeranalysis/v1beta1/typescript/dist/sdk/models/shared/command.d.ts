import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Command describes a step performed as part of the build pipeline.
**/
export declare class Command extends SpeakeasyBase {
    args?: string[];
    dir?: string;
    env?: string[];
    id?: string;
    name?: string;
    waitFor?: string[];
}
