import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class AuthenticationExecutionRepresentation extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=authenticator" })
  authenticator?: string;

  @SpeakeasyMetadata({ data: "json, name=authenticatorConfig" })
  authenticatorConfig?: string;

  @SpeakeasyMetadata({ data: "json, name=authenticatorFlow" })
  authenticatorFlow?: boolean;

  @SpeakeasyMetadata({ data: "json, name=autheticatorFlow" })
  autheticatorFlow?: boolean;

  @SpeakeasyMetadata({ data: "json, name=flowId" })
  flowId?: string;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=parentFlow" })
  parentFlow?: string;

  @SpeakeasyMetadata({ data: "json, name=priority" })
  priority?: number;

  @SpeakeasyMetadata({ data: "json, name=requirement" })
  requirement?: string;
}
