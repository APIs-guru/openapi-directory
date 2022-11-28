import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { EntityType } from "./entitytype";



// ListEntityTypesResponse
/** 
 * Response message for EntityService.ListEntityTypes
**/
export class ListEntityTypesResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;

  @SpeakeasyMetadata({ data: "json, name=types", elemType: EntityType })
  types?: EntityType[];

  @SpeakeasyMetadata({ data: "json, name=unsupportedTypeNames" })
  unsupportedTypeNames?: string[];
}
