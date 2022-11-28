import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { AttributeDefinition } from "./attributedefinition";



export class ListAttributeDefinitionsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=attributeDefinitions", elemType: AttributeDefinition })
  attributeDefinitions?: AttributeDefinition[];

  @SpeakeasyMetadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;
}
