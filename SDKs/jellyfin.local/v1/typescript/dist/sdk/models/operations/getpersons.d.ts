import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetPersonsQueryParams extends SpeakeasyBase {
    appearsInItemId?: string;
    enableImageTypes?: shared.ImageTypeEnum[];
    enableImages?: boolean;
    enableUserData?: boolean;
    excludePersonTypes?: string[];
    fields?: shared.ItemFieldsEnum[];
    filters?: shared.ItemFilterEnum[];
    imageTypeLimit?: number;
    isFavorite?: boolean;
    limit?: number;
    personTypes?: string[];
    searchTerm?: string;
    userId?: string;
}
export declare class GetPersonsSecurity extends SpeakeasyBase {
    customAuthentication: shared.SchemeCustomAuthentication;
}
export declare class GetPersonsRequest extends SpeakeasyBase {
    queryParams: GetPersonsQueryParams;
    security: GetPersonsSecurity;
}
export declare class GetPersonsResponse extends SpeakeasyBase {
    baseItemDtoQueryResult?: shared.BaseItemDtoQueryResult;
    contentType: string;
    statusCode: number;
}
