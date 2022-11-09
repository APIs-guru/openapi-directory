import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { OutputConfig } from "./outputconfig";


// TraceSink
/** 
 * Describes a sink used to export traces to a BigQuery dataset. The sink must be created within a project.
**/
export class TraceSink extends SpeakeasyBase {
  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=outputConfig" })
  outputConfig?: OutputConfig;

  @Metadata({ data: "json, name=writerIdentity" })
  writerIdentity?: string;
}
