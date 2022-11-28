import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { PolicyControllerMonitoringConfig } from "./policycontrollermonitoringconfig";
import { PolicyControllerTemplateLibraryConfig } from "./policycontrollertemplatelibraryconfig";


export enum PolicyControllerHubConfigInstallSpecEnum {
    InstallSpecUnspecified = "INSTALL_SPEC_UNSPECIFIED",
    InstallSpecNotInstalled = "INSTALL_SPEC_NOT_INSTALLED",
    InstallSpecEnabled = "INSTALL_SPEC_ENABLED",
    InstallSpecSuspended = "INSTALL_SPEC_SUSPENDED"
}


// PolicyControllerHubConfig
/** 
 * Configuration for Policy Controller
**/
export class PolicyControllerHubConfig extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=auditIntervalSeconds" })
  auditIntervalSeconds?: string;

  @SpeakeasyMetadata({ data: "json, name=exemptableNamespaces" })
  exemptableNamespaces?: string[];

  @SpeakeasyMetadata({ data: "json, name=installSpec" })
  installSpec?: PolicyControllerHubConfigInstallSpecEnum;

  @SpeakeasyMetadata({ data: "json, name=logDeniesEnabled" })
  logDeniesEnabled?: boolean;

  @SpeakeasyMetadata({ data: "json, name=monitoring" })
  monitoring?: PolicyControllerMonitoringConfig;

  @SpeakeasyMetadata({ data: "json, name=mutationEnabled" })
  mutationEnabled?: boolean;

  @SpeakeasyMetadata({ data: "json, name=referentialRulesEnabled" })
  referentialRulesEnabled?: boolean;

  @SpeakeasyMetadata({ data: "json, name=templateLibraryConfig" })
  templateLibraryConfig?: PolicyControllerTemplateLibraryConfig;
}
