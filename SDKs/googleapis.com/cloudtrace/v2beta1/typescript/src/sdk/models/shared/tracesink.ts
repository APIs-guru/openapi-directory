import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { OutputConfig } from "./outputconfig";



// TraceSink
/** 
 * Describes a sink used to export traces to a BigQuery dataset. The sink must be created within a project.
**/
export class TraceSink extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=outputConfig" })
  outputConfig?: OutputConfig;

  @SpeakeasyMetadata({ data: "json, name=writerIdentity" })
  writerIdentity?: string;
}


// TraceSinkInput
/** 
 * Describes a sink used to export traces to a BigQuery dataset. The sink must be created within a project.
**/
export class TraceSinkInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=outputConfig" })
  outputConfig?: OutputConfig;
}
