import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ConfigManagementPolicyControllerMonitoring } from "./configmanagementpolicycontrollermonitoring";



// ConfigManagementPolicyController
/** 
 * Configuration for Policy Controller
**/
export class ConfigManagementPolicyController extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=auditIntervalSeconds" })
  auditIntervalSeconds?: string;

  @SpeakeasyMetadata({ data: "json, name=enabled" })
  enabled?: boolean;

  @SpeakeasyMetadata({ data: "json, name=exemptableNamespaces" })
  exemptableNamespaces?: string[];

  @SpeakeasyMetadata({ data: "json, name=logDeniesEnabled" })
  logDeniesEnabled?: boolean;

  @SpeakeasyMetadata({ data: "json, name=monitoring" })
  monitoring?: ConfigManagementPolicyControllerMonitoring;

  @SpeakeasyMetadata({ data: "json, name=mutationEnabled" })
  mutationEnabled?: boolean;

  @SpeakeasyMetadata({ data: "json, name=referentialRulesEnabled" })
  referentialRulesEnabled?: boolean;

  @SpeakeasyMetadata({ data: "json, name=templateLibraryInstalled" })
  templateLibraryInstalled?: boolean;
}
