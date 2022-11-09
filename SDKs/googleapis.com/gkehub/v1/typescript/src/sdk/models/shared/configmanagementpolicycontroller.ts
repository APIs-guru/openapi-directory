import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { ConfigManagementPolicyControllerMonitoring } from "./configmanagementpolicycontrollermonitoring";


// ConfigManagementPolicyController
/** 
 * Configuration for Policy Controller
**/
export class ConfigManagementPolicyController extends SpeakeasyBase {
  @Metadata({ data: "json, name=auditIntervalSeconds" })
  auditIntervalSeconds?: string;

  @Metadata({ data: "json, name=enabled" })
  enabled?: boolean;

  @Metadata({ data: "json, name=exemptableNamespaces" })
  exemptableNamespaces?: string[];

  @Metadata({ data: "json, name=logDeniesEnabled" })
  logDeniesEnabled?: boolean;

  @Metadata({ data: "json, name=monitoring" })
  monitoring?: ConfigManagementPolicyControllerMonitoring;

  @Metadata({ data: "json, name=mutationEnabled" })
  mutationEnabled?: boolean;

  @Metadata({ data: "json, name=referentialRulesEnabled" })
  referentialRulesEnabled?: boolean;

  @Metadata({ data: "json, name=templateLibraryInstalled" })
  templateLibraryInstalled?: boolean;
}
