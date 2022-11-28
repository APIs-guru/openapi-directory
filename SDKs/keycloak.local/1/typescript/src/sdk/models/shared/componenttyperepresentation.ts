import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ConfigPropertyRepresentation } from "./configpropertyrepresentation";



export class ComponentTypeRepresentation extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=helpText" })
  helpText?: string;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=metadata" })
  metadata?: Map<string, any>;

  @SpeakeasyMetadata({ data: "json, name=properties", elemType: ConfigPropertyRepresentation })
  properties?: ConfigPropertyRepresentation[];
}
