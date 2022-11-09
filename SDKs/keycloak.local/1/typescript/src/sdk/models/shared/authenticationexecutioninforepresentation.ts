import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class AuthenticationExecutionInfoRepresentation extends SpeakeasyBase {
  @Metadata({ data: "json, name=alias" })
  alias?: string;

  @Metadata({ data: "json, name=authenticationConfig" })
  authenticationConfig?: string;

  @Metadata({ data: "json, name=authenticationFlow" })
  authenticationFlow?: boolean;

  @Metadata({ data: "json, name=configurable" })
  configurable?: boolean;

  @Metadata({ data: "json, name=displayName" })
  displayName?: string;

  @Metadata({ data: "json, name=flowId" })
  flowId?: string;

  @Metadata({ data: "json, name=id" })
  id?: string;

  @Metadata({ data: "json, name=index" })
  index?: number;

  @Metadata({ data: "json, name=level" })
  level?: number;

  @Metadata({ data: "json, name=providerId" })
  providerId?: string;

  @Metadata({ data: "json, name=requirement" })
  requirement?: string;

  @Metadata({ data: "json, name=requirementChoices" })
  requirementChoices?: string[];
}
