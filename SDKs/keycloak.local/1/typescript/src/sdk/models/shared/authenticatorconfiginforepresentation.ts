import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { ConfigPropertyRepresentation } from "./configpropertyrepresentation";


export class AuthenticatorConfigInfoRepresentation extends SpeakeasyBase {
  @Metadata({ data: "json, name=helpText" })
  helpText?: string;

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=properties", elemType: shared.ConfigPropertyRepresentation })
  properties?: ConfigPropertyRepresentation[];

  @Metadata({ data: "json, name=providerId" })
  providerId?: string;
}
