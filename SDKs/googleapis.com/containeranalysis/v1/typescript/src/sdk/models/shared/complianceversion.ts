import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// ComplianceVersion
/** 
 * Describes the CIS benchmark version that is applicable to a given OS and os version.
**/
export class ComplianceVersion extends SpeakeasyBase {
  @Metadata({ data: "json, name=benchmarkDocument" })
  benchmarkDocument?: string;

  @Metadata({ data: "json, name=cpeUri" })
  cpeUri?: string;

  @Metadata({ data: "json, name=version" })
  version?: string;
}
