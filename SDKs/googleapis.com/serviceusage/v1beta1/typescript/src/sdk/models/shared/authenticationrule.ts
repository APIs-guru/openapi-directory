import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { OAuthRequirements } from "./oauthrequirements";
import { AuthRequirement } from "./authrequirement";



// AuthenticationRule
/** 
 * Authentication rules for the service. By default, if a method has any authentication requirements, every request must include a valid credential matching one of the requirements. It's an error to include more than one kind of credential in a single request. If a method doesn't have any auth requirements, request credentials will be ignored.
**/
export class AuthenticationRule extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=allowWithoutCredential" })
  allowWithoutCredential?: boolean;

  @SpeakeasyMetadata({ data: "json, name=oauth" })
  oauth?: OAuthRequirements;

  @SpeakeasyMetadata({ data: "json, name=requirements", elemType: AuthRequirement })
  requirements?: AuthRequirement[];

  @SpeakeasyMetadata({ data: "json, name=selector" })
  selector?: string;
}
