import { SpeakeasyBase } from "../../../internal/utils";
import { SlsaCompleteness } from "./slsacompleteness";
/**
 * Other properties of the build.
**/
export declare class SlsaMetadata extends SpeakeasyBase {
    buildFinishedOn?: string;
    buildInvocationId?: string;
    buildStartedOn?: string;
    completeness?: SlsaCompleteness;
    reproducible?: boolean;
}
