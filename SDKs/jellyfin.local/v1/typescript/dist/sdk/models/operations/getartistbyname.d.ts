import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetArtistByNamePathParams extends SpeakeasyBase {
    name: string;
}
export declare class GetArtistByNameQueryParams extends SpeakeasyBase {
    userId?: string;
}
export declare class GetArtistByNameSecurity extends SpeakeasyBase {
    customAuthentication: shared.SchemeCustomAuthentication;
}
export declare class GetArtistByNameRequest extends SpeakeasyBase {
    pathParams: GetArtistByNamePathParams;
    queryParams: GetArtistByNameQueryParams;
    security: GetArtistByNameSecurity;
}
export declare class GetArtistByNameResponse extends SpeakeasyBase {
    baseItemDto?: shared.BaseItemDto;
    contentType: string;
    statusCode: number;
}
