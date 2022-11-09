import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { EntityType } from "./entitytype";


// ListEntityTypesResponse
/** 
 * Response message for EntityService.ListEntityTypes
**/
export class ListEntityTypesResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;

  @Metadata({ data: "json, name=types", elemType: shared.EntityType })
  types?: EntityType[];

  @Metadata({ data: "json, name=unsupportedTypeNames" })
  unsupportedTypeNames?: string[];
}
