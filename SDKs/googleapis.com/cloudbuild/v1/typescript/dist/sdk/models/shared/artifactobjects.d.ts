import { SpeakeasyBase } from "../../../internal/utils";
import { TimeSpan } from "./timespan";
/**
 * Files in the workspace to upload to Cloud Storage upon successful completion of all build steps.
**/
export declare class ArtifactObjects extends SpeakeasyBase {
    location?: string;
    paths?: string[];
    timing?: TimeSpan;
}
