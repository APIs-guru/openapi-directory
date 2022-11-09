import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { Resource } from "./resource";

export enum RoleGrantPrincipalEnum {
    PrincipalUnspecified = "PRINCIPAL_UNSPECIFIED"
,    ConnectorSa = "CONNECTOR_SA"
}


// RoleGrant
/** 
 * This configuration defines all the Cloud IAM roles that needs to be granted to a particular GCP resource for the selected prinicpal like service account. These configurations will let UI display to customers what IAM roles need to be granted by them. Or these configurations can be used by the UI to render a 'grant' button to do the same on behalf of the user.
**/
export class RoleGrant extends SpeakeasyBase {
  @Metadata({ data: "json, name=helperTextTemplate" })
  helperTextTemplate?: string;

  @Metadata({ data: "json, name=principal" })
  principal?: RoleGrantPrincipalEnum;

  @Metadata({ data: "json, name=resource" })
  resource?: Resource;

  @Metadata({ data: "json, name=roles" })
  roles?: string[];
}
