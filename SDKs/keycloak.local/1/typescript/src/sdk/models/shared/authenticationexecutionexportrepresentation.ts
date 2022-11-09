import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class AuthenticationExecutionExportRepresentation extends SpeakeasyBase {
  @Metadata({ data: "json, name=authenticator" })
  authenticator?: string;

  @Metadata({ data: "json, name=authenticatorConfig" })
  authenticatorConfig?: string;

  @Metadata({ data: "json, name=authenticatorFlow" })
  authenticatorFlow?: boolean;

  @Metadata({ data: "json, name=autheticatorFlow" })
  autheticatorFlow?: boolean;

  @Metadata({ data: "json, name=flowAlias" })
  flowAlias?: string;

  @Metadata({ data: "json, name=priority" })
  priority?: number;

  @Metadata({ data: "json, name=requirement" })
  requirement?: string;

  @Metadata({ data: "json, name=userSetupAllowed" })
  userSetupAllowed?: boolean;
}
