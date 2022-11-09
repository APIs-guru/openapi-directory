import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// SkippedDetail
/** 
 * Details for an outcome with a SKIPPED outcome summary.
**/
export class SkippedDetail extends SpeakeasyBase {
  @Metadata({ data: "json, name=incompatibleAppVersion" })
  incompatibleAppVersion?: boolean;

  @Metadata({ data: "json, name=incompatibleArchitecture" })
  incompatibleArchitecture?: boolean;

  @Metadata({ data: "json, name=incompatibleDevice" })
  incompatibleDevice?: boolean;
}
