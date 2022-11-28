import { SpeakeasyBase } from "../../../internal/utils";
import { EventDefinition } from "./eventdefinition";
/**
 * A ListDefinitions response.
**/
export declare class EventDefinitionListResponse extends SpeakeasyBase {
    items?: EventDefinition[];
    kind?: string;
    nextPageToken?: string;
}
