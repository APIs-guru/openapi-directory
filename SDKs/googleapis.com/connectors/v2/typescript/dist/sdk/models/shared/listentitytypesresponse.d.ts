import { SpeakeasyBase } from "../../../internal/utils/utils";
import { EntityType } from "./entitytype";
/**
 * Response message for EntityService.ListEntityTypes
**/
export declare class ListEntityTypesResponse extends SpeakeasyBase {
    nextPageToken?: string;
    types?: EntityType[];
    unsupportedTypeNames?: string[];
}
