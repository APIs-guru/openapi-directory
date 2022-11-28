import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetLibraryPathParams extends SpeakeasyBase {
    organizationUuid: string;
}
export declare class GetLibraryQueryParams extends SpeakeasyBase {
    all?: boolean;
    eventLogUuid?: string;
    limit?: number;
    offset?: string;
}
export declare class GetLibrarySecurity extends SpeakeasyBase {
    zettleOauth?: shared.SchemeZettleOauth;
    zettleApiKey?: shared.SchemeZettleApiKey;
}
export declare class GetLibraryRequest extends SpeakeasyBase {
    pathParams: GetLibraryPathParams;
    queryParams: GetLibraryQueryParams;
    security: GetLibrarySecurity;
}
export declare class GetLibraryResponse extends SpeakeasyBase {
    contentType: string;
    headers: Map<string, string[]>;
    libraryResponse?: shared.LibraryResponse;
    statusCode: number;
}
