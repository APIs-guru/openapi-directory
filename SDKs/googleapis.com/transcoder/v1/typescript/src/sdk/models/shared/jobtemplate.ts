import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { JobConfig } from "./jobconfig";


// JobTemplate
/** 
 * Transcoding job template resource.
**/
export class JobTemplate extends SpeakeasyBase {
  @Metadata({ data: "json, name=config" })
  config?: JobConfig;

  @Metadata({ data: "json, name=labels" })
  labels?: Map<string, string>;

  @Metadata({ data: "json, name=name" })
  name?: string;
}
