import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// GoogleCloudDialogflowV2HumanAgentHandoffConfigSalesforceLiveAgentConfig
/** 
 * Configuration specific to Salesforce Live Agent.
**/
export class GoogleCloudDialogflowV2HumanAgentHandoffConfigSalesforceLiveAgentConfig extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=buttonId" })
  buttonId?: string;

  @SpeakeasyMetadata({ data: "json, name=deploymentId" })
  deploymentId?: string;

  @SpeakeasyMetadata({ data: "json, name=endpointDomain" })
  endpointDomain?: string;

  @SpeakeasyMetadata({ data: "json, name=organizationId" })
  organizationId?: string;
}
