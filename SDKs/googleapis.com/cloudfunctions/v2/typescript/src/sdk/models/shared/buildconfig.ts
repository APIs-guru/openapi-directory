import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { Source } from "./source";
import { SourceProvenance } from "./sourceprovenance";


// BuildConfig
/** 
 * Describes the Build step of the function that builds a container from the given source.
**/
export class BuildConfig extends SpeakeasyBase {
  @Metadata({ data: "json, name=build" })
  build?: string;

  @Metadata({ data: "json, name=dockerRepository" })
  dockerRepository?: string;

  @Metadata({ data: "json, name=entryPoint" })
  entryPoint?: string;

  @Metadata({ data: "json, name=environmentVariables" })
  environmentVariables?: Map<string, string>;

  @Metadata({ data: "json, name=runtime" })
  runtime?: string;

  @Metadata({ data: "json, name=source" })
  source?: Source;

  @Metadata({ data: "json, name=sourceProvenance" })
  sourceProvenance?: SourceProvenance;

  @Metadata({ data: "json, name=workerPool" })
  workerPool?: string;
}
