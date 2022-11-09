import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { PolicyControllerMonitoringConfig } from "./policycontrollermonitoringconfig";
import { PolicyControllerTemplateLibraryConfig } from "./policycontrollertemplatelibraryconfig";

export enum PolicyControllerHubConfigInstallSpecEnum {
    InstallSpecUnspecified = "INSTALL_SPEC_UNSPECIFIED"
,    InstallSpecNotInstalled = "INSTALL_SPEC_NOT_INSTALLED"
,    InstallSpecEnabled = "INSTALL_SPEC_ENABLED"
,    InstallSpecSuspended = "INSTALL_SPEC_SUSPENDED"
}


// PolicyControllerHubConfig
/** 
 * Configuration for Policy Controller
**/
export class PolicyControllerHubConfig extends SpeakeasyBase {
  @Metadata({ data: "json, name=auditIntervalSeconds" })
  auditIntervalSeconds?: string;

  @Metadata({ data: "json, name=exemptableNamespaces" })
  exemptableNamespaces?: string[];

  @Metadata({ data: "json, name=installSpec" })
  installSpec?: PolicyControllerHubConfigInstallSpecEnum;

  @Metadata({ data: "json, name=logDeniesEnabled" })
  logDeniesEnabled?: boolean;

  @Metadata({ data: "json, name=monitoring" })
  monitoring?: PolicyControllerMonitoringConfig;

  @Metadata({ data: "json, name=mutationEnabled" })
  mutationEnabled?: boolean;

  @Metadata({ data: "json, name=referentialRulesEnabled" })
  referentialRulesEnabled?: boolean;

  @Metadata({ data: "json, name=templateLibraryConfig" })
  templateLibraryConfig?: PolicyControllerTemplateLibraryConfig;
}
