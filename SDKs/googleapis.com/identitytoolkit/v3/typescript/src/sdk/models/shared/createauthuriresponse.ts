import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// CreateAuthUriResponse
/** 
 * Response of creating the IDP authentication URL.
**/
export class CreateAuthUriResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=allProviders" })
  allProviders?: string[];

  @Metadata({ data: "json, name=authUri" })
  authUri?: string;

  @Metadata({ data: "json, name=captchaRequired" })
  captchaRequired?: boolean;

  @Metadata({ data: "json, name=forExistingProvider" })
  forExistingProvider?: boolean;

  @Metadata({ data: "json, name=kind" })
  kind?: string;

  @Metadata({ data: "json, name=providerId" })
  providerId?: string;

  @Metadata({ data: "json, name=registered" })
  registered?: boolean;

  @Metadata({ data: "json, name=sessionId" })
  sessionId?: string;

  @Metadata({ data: "json, name=signinMethods" })
  signinMethods?: string[];
}
