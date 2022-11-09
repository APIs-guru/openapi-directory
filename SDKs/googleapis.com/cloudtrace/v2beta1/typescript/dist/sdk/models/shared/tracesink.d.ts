import { SpeakeasyBase } from "../../../internal/utils/utils";
import { OutputConfig } from "./outputconfig";
/**
 * Describes a sink used to export traces to a BigQuery dataset. The sink must be created within a project.
**/
export declare class TraceSink extends SpeakeasyBase {
    name?: string;
    outputConfig?: OutputConfig;
    writerIdentity?: string;
}
