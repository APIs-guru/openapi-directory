import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Entity } from "./entity";



// ListEntitiesResponse
/** 
 * Response message for EntityService.ListEntities
**/
export class ListEntitiesResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=entities", elemType: Entity })
  entities?: Entity[];

  @SpeakeasyMetadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;
}
