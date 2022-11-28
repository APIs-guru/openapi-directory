import { SpeakeasyBase } from "../../../internal/utils";
import { OsPolicyAssignmentReportOsPolicyCompliance } from "./ospolicyassignmentreportospolicycompliance";
/**
 * A report of the OS policy assignment status for a given instance.
**/
export declare class OsPolicyAssignmentReport extends SpeakeasyBase {
    instance?: string;
    lastRunId?: string;
    name?: string;
    osPolicyAssignment?: string;
    osPolicyCompliances?: OsPolicyAssignmentReportOsPolicyCompliance[];
    updateTime?: string;
}
