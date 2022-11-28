import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// ComplianceVersion
/** 
 * Describes the CIS benchmark version that is applicable to a given OS and os version.
**/
export class ComplianceVersion extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=benchmarkDocument" })
  benchmarkDocument?: string;

  @SpeakeasyMetadata({ data: "json, name=cpeUri" })
  cpeUri?: string;

  @SpeakeasyMetadata({ data: "json, name=version" })
  version?: string;
}
