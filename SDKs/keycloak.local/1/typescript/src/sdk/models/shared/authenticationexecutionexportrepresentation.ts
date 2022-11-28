import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class AuthenticationExecutionExportRepresentation extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=authenticator" })
  authenticator?: string;

  @SpeakeasyMetadata({ data: "json, name=authenticatorConfig" })
  authenticatorConfig?: string;

  @SpeakeasyMetadata({ data: "json, name=authenticatorFlow" })
  authenticatorFlow?: boolean;

  @SpeakeasyMetadata({ data: "json, name=autheticatorFlow" })
  autheticatorFlow?: boolean;

  @SpeakeasyMetadata({ data: "json, name=flowAlias" })
  flowAlias?: string;

  @SpeakeasyMetadata({ data: "json, name=priority" })
  priority?: number;

  @SpeakeasyMetadata({ data: "json, name=requirement" })
  requirement?: string;

  @SpeakeasyMetadata({ data: "json, name=userSetupAllowed" })
  userSetupAllowed?: boolean;
}
