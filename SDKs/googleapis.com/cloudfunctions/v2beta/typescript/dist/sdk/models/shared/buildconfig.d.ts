import { SpeakeasyBase } from "../../../internal/utils/utils";
import { Source } from "./source";
import { SourceProvenance } from "./sourceprovenance";
/**
 * Describes the Build step of the function that builds a container from the given source.
**/
export declare class BuildConfig extends SpeakeasyBase {
    build?: string;
    dockerRepository?: string;
    entryPoint?: string;
    environmentVariables?: Map<string, string>;
    runtime?: string;
    source?: Source;
    sourceProvenance?: SourceProvenance;
    workerPool?: string;
}
