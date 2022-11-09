import { SpeakeasyBase } from "../../../internal/utils/utils";
import { PolicyControllerMonitoringConfig } from "./policycontrollermonitoringconfig";
import { PolicyControllerTemplateLibraryConfig } from "./policycontrollertemplatelibraryconfig";
export declare enum PolicyControllerHubConfigInstallSpecEnum {
    InstallSpecUnspecified = "INSTALL_SPEC_UNSPECIFIED",
    InstallSpecNotInstalled = "INSTALL_SPEC_NOT_INSTALLED",
    InstallSpecEnabled = "INSTALL_SPEC_ENABLED",
    InstallSpecSuspended = "INSTALL_SPEC_SUSPENDED"
}
/**
 * Configuration for Policy Controller
**/
export declare class PolicyControllerHubConfig extends SpeakeasyBase {
    auditIntervalSeconds?: string;
    exemptableNamespaces?: string[];
    installSpec?: PolicyControllerHubConfigInstallSpecEnum;
    logDeniesEnabled?: boolean;
    monitoring?: PolicyControllerMonitoringConfig;
    mutationEnabled?: boolean;
    referentialRulesEnabled?: boolean;
    templateLibraryConfig?: PolicyControllerTemplateLibraryConfig;
}
