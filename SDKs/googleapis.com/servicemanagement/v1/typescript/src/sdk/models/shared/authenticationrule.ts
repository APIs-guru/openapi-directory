import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { OAuthRequirements } from "./oauthrequirements";
import { AuthRequirement } from "./authrequirement";


// AuthenticationRule
/** 
 * Authentication rules for the service. By default, if a method has any authentication requirements, every request must include a valid credential matching one of the requirements. It's an error to include more than one kind of credential in a single request. If a method doesn't have any auth requirements, request credentials will be ignored.
**/
export class AuthenticationRule extends SpeakeasyBase {
  @Metadata({ data: "json, name=allowWithoutCredential" })
  allowWithoutCredential?: boolean;

  @Metadata({ data: "json, name=oauth" })
  oauth?: OAuthRequirements;

  @Metadata({ data: "json, name=requirements", elemType: shared.AuthRequirement })
  requirements?: AuthRequirement[];

  @Metadata({ data: "json, name=selector" })
  selector?: string;
}
