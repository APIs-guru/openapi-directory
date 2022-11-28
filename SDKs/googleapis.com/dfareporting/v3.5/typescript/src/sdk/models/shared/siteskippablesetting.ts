import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { VideoOffset } from "./videooffset";



// SiteSkippableSetting
/** 
 * Skippable Settings
**/
export class SiteSkippableSetting extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=kind" })
  kind?: string;

  @SpeakeasyMetadata({ data: "json, name=progressOffset" })
  progressOffset?: VideoOffset;

  @SpeakeasyMetadata({ data: "json, name=skipOffset" })
  skipOffset?: VideoOffset;

  @SpeakeasyMetadata({ data: "json, name=skippable" })
  skippable?: boolean;
}
