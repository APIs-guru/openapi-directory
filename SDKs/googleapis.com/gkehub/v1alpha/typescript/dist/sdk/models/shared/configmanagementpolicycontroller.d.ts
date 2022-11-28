import { SpeakeasyBase } from "../../../internal/utils";
import { ConfigManagementPolicyControllerMonitoring } from "./configmanagementpolicycontrollermonitoring";
/**
 * Configuration for Policy Controller
**/
export declare class ConfigManagementPolicyController extends SpeakeasyBase {
    auditIntervalSeconds?: string;
    enabled?: boolean;
    exemptableNamespaces?: string[];
    logDeniesEnabled?: boolean;
    monitoring?: ConfigManagementPolicyControllerMonitoring;
    mutationEnabled?: boolean;
    referentialRulesEnabled?: boolean;
    templateLibraryInstalled?: boolean;
}
