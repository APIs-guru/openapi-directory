import { SpeakeasyBase } from "../../../internal/utils/utils";
import { Interval } from "./interval";
/**
 * A Release is owned by a Version. A Release contains information about the release(s) of its parent version. This includes when the release began and ended, as well as what percentage it was released at. If the version is released again, or if the serving percentage changes, it will create another release under the version.
**/
export declare class Release extends SpeakeasyBase {
    fraction?: number;
    fractionGroup?: string;
    name?: string;
    serving?: Interval;
    version?: string;
}
