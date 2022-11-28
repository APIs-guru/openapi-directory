import { SpeakeasyBase } from "../../../internal/utils";
import { Resource } from "./resource";
export declare enum RoleGrantPrincipalEnum {
    PrincipalUnspecified = "PRINCIPAL_UNSPECIFIED",
    ConnectorSa = "CONNECTOR_SA"
}
/**
 * This configuration defines all the Cloud IAM roles that needs to be granted to a particular GCP resource for the selected prinicpal like service account. These configurations will let UI display to customers what IAM roles need to be granted by them. Or these configurations can be used by the UI to render a 'grant' button to do the same on behalf of the user.
**/
export declare class RoleGrant extends SpeakeasyBase {
    helperTextTemplate?: string;
    principal?: RoleGrantPrincipalEnum;
    resource?: Resource;
    roles?: string[];
}
