import { SpeakeasyBase } from "../../../internal/utils";
import { Completeness } from "./completeness";
/**
 * Other properties of the build.
**/
export declare class Metadata extends SpeakeasyBase {
    buildFinishedOn?: string;
    buildInvocationId?: string;
    buildStartedOn?: string;
    completeness?: Completeness;
    reproducible?: boolean;
}
