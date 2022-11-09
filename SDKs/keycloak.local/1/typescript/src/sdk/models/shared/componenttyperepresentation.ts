import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { ConfigPropertyRepresentation } from "./configpropertyrepresentation";


export class ComponentTypeRepresentation extends SpeakeasyBase {
  @Metadata({ data: "json, name=helpText" })
  helpText?: string;

  @Metadata({ data: "json, name=id" })
  id?: string;

  @Metadata({ data: "json, name=metadata" })
  metadata?: Map<string, any>;

  @Metadata({ data: "json, name=properties", elemType: shared.ConfigPropertyRepresentation })
  properties?: ConfigPropertyRepresentation[];
}
