import { SpeakeasyBase } from "../../../internal/utils";
import { CisBenchmark } from "./cisbenchmark";
import { ComplianceVersion } from "./complianceversion";
export declare class ComplianceNote extends SpeakeasyBase {
    cisBenchmark?: CisBenchmark;
    description?: string;
    rationale?: string;
    remediation?: string;
    scanInstructions?: string;
    title?: string;
    version?: ComplianceVersion[];
}
