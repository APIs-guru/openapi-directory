import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { EventDefinition } from "./eventdefinition";



// EventDefinitionListResponse
/** 
 * A ListDefinitions response.
**/
export class EventDefinitionListResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=items", elemType: EventDefinition })
  items?: EventDefinition[];

  @SpeakeasyMetadata({ data: "json, name=kind" })
  kind?: string;

  @SpeakeasyMetadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;
}
