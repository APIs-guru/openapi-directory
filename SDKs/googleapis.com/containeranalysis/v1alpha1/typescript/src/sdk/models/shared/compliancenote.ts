import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { CisBenchmark } from "./cisbenchmark";
import { ComplianceVersion } from "./complianceversion";



// ComplianceNote
/** 
 * ComplianceNote encapsulates all information about a specific compliance check.
**/
export class ComplianceNote extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=cisBenchmark" })
  cisBenchmark?: CisBenchmark;

  @SpeakeasyMetadata({ data: "json, name=description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=rationale" })
  rationale?: string;

  @SpeakeasyMetadata({ data: "json, name=remediation" })
  remediation?: string;

  @SpeakeasyMetadata({ data: "json, name=scanInstructions" })
  scanInstructions?: string;

  @SpeakeasyMetadata({ data: "json, name=title" })
  title?: string;

  @SpeakeasyMetadata({ data: "json, name=version", elemType: ComplianceVersion })
  version?: ComplianceVersion[];
}
