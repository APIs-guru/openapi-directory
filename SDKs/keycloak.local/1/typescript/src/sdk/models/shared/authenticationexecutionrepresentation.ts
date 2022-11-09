import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class AuthenticationExecutionRepresentation extends SpeakeasyBase {
  @Metadata({ data: "json, name=authenticator" })
  authenticator?: string;

  @Metadata({ data: "json, name=authenticatorConfig" })
  authenticatorConfig?: string;

  @Metadata({ data: "json, name=authenticatorFlow" })
  authenticatorFlow?: boolean;

  @Metadata({ data: "json, name=autheticatorFlow" })
  autheticatorFlow?: boolean;

  @Metadata({ data: "json, name=flowId" })
  flowId?: string;

  @Metadata({ data: "json, name=id" })
  id?: string;

  @Metadata({ data: "json, name=parentFlow" })
  parentFlow?: string;

  @Metadata({ data: "json, name=priority" })
  priority?: number;

  @Metadata({ data: "json, name=requirement" })
  requirement?: string;
}
