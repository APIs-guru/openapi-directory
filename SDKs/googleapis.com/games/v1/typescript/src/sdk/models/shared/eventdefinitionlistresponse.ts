import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { EventDefinition } from "./eventdefinition";


// EventDefinitionListResponse
/** 
 * A ListDefinitions response.
**/
export class EventDefinitionListResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=items", elemType: shared.EventDefinition })
  items?: EventDefinition[];

  @Metadata({ data: "json, name=kind" })
  kind?: string;

  @Metadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;
}
