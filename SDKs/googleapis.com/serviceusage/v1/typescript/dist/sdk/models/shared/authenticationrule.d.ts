import { SpeakeasyBase } from "../../../internal/utils";
import { OAuthRequirements } from "./oauthrequirements";
import { AuthRequirement } from "./authrequirement";
/**
 * Authentication rules for the service. By default, if a method has any authentication requirements, every request must include a valid credential matching one of the requirements. It's an error to include more than one kind of credential in a single request. If a method doesn't have any auth requirements, request credentials will be ignored.
**/
export declare class AuthenticationRule extends SpeakeasyBase {
    allowWithoutCredential?: boolean;
    oauth?: OAuthRequirements;
    requirements?: AuthRequirement[];
    selector?: string;
}
