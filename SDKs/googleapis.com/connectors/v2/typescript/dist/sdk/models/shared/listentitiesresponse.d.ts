import { SpeakeasyBase } from "../../../internal/utils";
import { Entity } from "./entity";
/**
 * Response message for EntityService.ListEntities
**/
export declare class ListEntitiesResponse extends SpeakeasyBase {
    entities?: Entity[];
    nextPageToken?: string;
}
