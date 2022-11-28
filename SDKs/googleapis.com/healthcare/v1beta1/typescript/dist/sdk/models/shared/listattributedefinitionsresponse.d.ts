import { SpeakeasyBase } from "../../../internal/utils";
import { AttributeDefinition } from "./attributedefinition";
export declare class ListAttributeDefinitionsResponse extends SpeakeasyBase {
    attributeDefinitions?: AttributeDefinition[];
    nextPageToken?: string;
}
