import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class PasswordPolicyTypeRepresentation extends SpeakeasyBase {
  @Metadata({ data: "json, name=configType" })
  configType?: string;

  @Metadata({ data: "json, name=defaultValue" })
  defaultValue?: string;

  @Metadata({ data: "json, name=displayName" })
  displayName?: string;

  @Metadata({ data: "json, name=id" })
  id?: string;

  @Metadata({ data: "json, name=multipleSupported" })
  multipleSupported?: boolean;
}
