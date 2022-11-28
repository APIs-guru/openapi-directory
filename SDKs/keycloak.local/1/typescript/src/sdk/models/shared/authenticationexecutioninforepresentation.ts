import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class AuthenticationExecutionInfoRepresentation extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=alias" })
  alias?: string;

  @SpeakeasyMetadata({ data: "json, name=authenticationConfig" })
  authenticationConfig?: string;

  @SpeakeasyMetadata({ data: "json, name=authenticationFlow" })
  authenticationFlow?: boolean;

  @SpeakeasyMetadata({ data: "json, name=configurable" })
  configurable?: boolean;

  @SpeakeasyMetadata({ data: "json, name=displayName" })
  displayName?: string;

  @SpeakeasyMetadata({ data: "json, name=flowId" })
  flowId?: string;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=index" })
  index?: number;

  @SpeakeasyMetadata({ data: "json, name=level" })
  level?: number;

  @SpeakeasyMetadata({ data: "json, name=providerId" })
  providerId?: string;

  @SpeakeasyMetadata({ data: "json, name=requirement" })
  requirement?: string;

  @SpeakeasyMetadata({ data: "json, name=requirementChoices" })
  requirementChoices?: string[];
}
