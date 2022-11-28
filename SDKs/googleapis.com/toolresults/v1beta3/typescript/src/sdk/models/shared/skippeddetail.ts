import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// SkippedDetail
/** 
 * Details for an outcome with a SKIPPED outcome summary.
**/
export class SkippedDetail extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=incompatibleAppVersion" })
  incompatibleAppVersion?: boolean;

  @SpeakeasyMetadata({ data: "json, name=incompatibleArchitecture" })
  incompatibleArchitecture?: boolean;

  @SpeakeasyMetadata({ data: "json, name=incompatibleDevice" })
  incompatibleDevice?: boolean;
}
