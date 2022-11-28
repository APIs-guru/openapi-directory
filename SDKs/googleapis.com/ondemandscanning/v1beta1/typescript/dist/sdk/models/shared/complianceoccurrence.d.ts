import { SpeakeasyBase } from "../../../internal/utils";
import { NonCompliantFile } from "./noncompliantfile";
/**
 * An indication that the compliance checks in the associated ComplianceNote were not satisfied for particular resources or a specified reason.
**/
export declare class ComplianceOccurrence extends SpeakeasyBase {
    nonComplianceReason?: string;
    nonCompliantFiles?: NonCompliantFile[];
}
