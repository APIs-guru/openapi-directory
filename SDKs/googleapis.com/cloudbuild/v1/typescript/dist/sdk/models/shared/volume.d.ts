import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Volume describes a Docker container volume which is mounted into build steps in order to persist files across build step execution.
**/
export declare class Volume extends SpeakeasyBase {
    name?: string;
    path?: string;
}
