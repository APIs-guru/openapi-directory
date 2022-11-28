import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ConfigPropertyRepresentation } from "./configpropertyrepresentation";



export class AuthenticatorConfigInfoRepresentation extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=helpText" })
  helpText?: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=properties", elemType: ConfigPropertyRepresentation })
  properties?: ConfigPropertyRepresentation[];

  @SpeakeasyMetadata({ data: "json, name=providerId" })
  providerId?: string;
}
