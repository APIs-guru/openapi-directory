import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// CreateAuthUriResponse
/** 
 * Response of creating the IDP authentication URL.
**/
export class CreateAuthUriResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=allProviders" })
  allProviders?: string[];

  @SpeakeasyMetadata({ data: "json, name=authUri" })
  authUri?: string;

  @SpeakeasyMetadata({ data: "json, name=captchaRequired" })
  captchaRequired?: boolean;

  @SpeakeasyMetadata({ data: "json, name=forExistingProvider" })
  forExistingProvider?: boolean;

  @SpeakeasyMetadata({ data: "json, name=kind" })
  kind?: string;

  @SpeakeasyMetadata({ data: "json, name=providerId" })
  providerId?: string;

  @SpeakeasyMetadata({ data: "json, name=registered" })
  registered?: boolean;

  @SpeakeasyMetadata({ data: "json, name=sessionId" })
  sessionId?: string;

  @SpeakeasyMetadata({ data: "json, name=signinMethods" })
  signinMethods?: string[];
}
