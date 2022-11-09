import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { VideoOffset } from "./videooffset";
import { VideoOffset } from "./videooffset";


// SkippableSetting
/** 
 * Skippable Settings
**/
export class SkippableSetting extends SpeakeasyBase {
  @Metadata({ data: "json, name=kind" })
  kind?: string;

  @Metadata({ data: "json, name=progressOffset" })
  progressOffset?: VideoOffset;

  @Metadata({ data: "json, name=skipOffset" })
  skipOffset?: VideoOffset;

  @Metadata({ data: "json, name=skippable" })
  skippable?: boolean;
}
