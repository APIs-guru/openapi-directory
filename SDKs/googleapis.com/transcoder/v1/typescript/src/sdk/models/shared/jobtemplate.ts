import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { JobConfig } from "./jobconfig";



// JobTemplate
/** 
 * Transcoding job template resource.
**/
export class JobTemplate extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=config" })
  config?: JobConfig;

  @SpeakeasyMetadata({ data: "json, name=labels" })
  labels?: Map<string, string>;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;
}
