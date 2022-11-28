import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetInstantMixFromArtistsPathParams extends SpeakeasyBase {
    id: string;
}
export declare class GetInstantMixFromArtistsQueryParams extends SpeakeasyBase {
    enableImageTypes?: shared.ImageTypeEnum[];
    enableImages?: boolean;
    enableUserData?: boolean;
    fields?: shared.ItemFieldsEnum[];
    imageTypeLimit?: number;
    limit?: number;
    userId?: string;
}
export declare class GetInstantMixFromArtistsSecurity extends SpeakeasyBase {
    customAuthentication: shared.SchemeCustomAuthentication;
}
export declare class GetInstantMixFromArtistsRequest extends SpeakeasyBase {
    pathParams: GetInstantMixFromArtistsPathParams;
    queryParams: GetInstantMixFromArtistsQueryParams;
    security: GetInstantMixFromArtistsSecurity;
}
export declare class GetInstantMixFromArtistsResponse extends SpeakeasyBase {
    baseItemDtoQueryResult?: shared.BaseItemDtoQueryResult;
    contentType: string;
    statusCode: number;
}
