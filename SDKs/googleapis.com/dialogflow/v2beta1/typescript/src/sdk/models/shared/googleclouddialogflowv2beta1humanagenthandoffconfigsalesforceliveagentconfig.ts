import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// GoogleCloudDialogflowV2beta1HumanAgentHandoffConfigSalesforceLiveAgentConfig
/** 
 * Configuration specific to Salesforce Live Agent.
**/
export class GoogleCloudDialogflowV2beta1HumanAgentHandoffConfigSalesforceLiveAgentConfig extends SpeakeasyBase {
  @Metadata({ data: "json, name=buttonId" })
  buttonId?: string;

  @Metadata({ data: "json, name=deploymentId" })
  deploymentId?: string;

  @Metadata({ data: "json, name=endpointDomain" })
  endpointDomain?: string;

  @Metadata({ data: "json, name=organizationId" })
  organizationId?: string;
}
