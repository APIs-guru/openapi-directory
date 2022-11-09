import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { CisBenchmark } from "./cisbenchmark";
import { ComplianceVersion } from "./complianceversion";


export class ComplianceNote extends SpeakeasyBase {
  @Metadata({ data: "json, name=cisBenchmark" })
  cisBenchmark?: CisBenchmark;

  @Metadata({ data: "json, name=description" })
  description?: string;

  @Metadata({ data: "json, name=rationale" })
  rationale?: string;

  @Metadata({ data: "json, name=remediation" })
  remediation?: string;

  @Metadata({ data: "json, name=scanInstructions" })
  scanInstructions?: string;

  @Metadata({ data: "json, name=title" })
  title?: string;

  @Metadata({ data: "json, name=version", elemType: shared.ComplianceVersion })
  version?: ComplianceVersion[];
}
