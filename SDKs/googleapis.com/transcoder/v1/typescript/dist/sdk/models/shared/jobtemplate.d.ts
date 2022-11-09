import { SpeakeasyBase } from "../../../internal/utils/utils";
import { JobConfig } from "./jobconfig";
/**
 * Transcoding job template resource.
**/
export declare class JobTemplate extends SpeakeasyBase {
    config?: JobConfig;
    labels?: Map<string, string>;
    name?: string;
}
