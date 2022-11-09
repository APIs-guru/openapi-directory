import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { AttributeDefinition } from "./attributedefinition";


export class ListAttributeDefinitionsResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=attributeDefinitions", elemType: shared.AttributeDefinition })
  attributeDefinitions?: AttributeDefinition[];

  @Metadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;
}
