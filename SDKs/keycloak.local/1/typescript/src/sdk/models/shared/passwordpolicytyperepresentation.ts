import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class PasswordPolicyTypeRepresentation extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=configType" })
  configType?: string;

  @SpeakeasyMetadata({ data: "json, name=defaultValue" })
  defaultValue?: string;

  @SpeakeasyMetadata({ data: "json, name=displayName" })
  displayName?: string;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=multipleSupported" })
  multipleSupported?: boolean;
}
