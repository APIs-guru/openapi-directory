import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class LibraryagentShelvesBooksListPathParams extends SpeakeasyBase {
    parent: string;
}
export declare class LibraryagentShelvesBooksListQueryParams extends SpeakeasyBase {
    dollarXgafv?: shared.XgafvEnum;
    accessToken?: string;
    alt?: shared.AltEnum;
    callback?: string;
    fields?: string;
    key?: string;
    oauthToken?: string;
    pageSize?: number;
    pageToken?: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    uploadType?: string;
    uploadProtocol?: string;
}
export declare class LibraryagentShelvesBooksListSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class LibraryagentShelvesBooksListRequest extends SpeakeasyBase {
    pathParams: LibraryagentShelvesBooksListPathParams;
    queryParams: LibraryagentShelvesBooksListQueryParams;
    security: LibraryagentShelvesBooksListSecurity;
}
export declare class LibraryagentShelvesBooksListResponse extends SpeakeasyBase {
    contentType: string;
    googleExampleLibraryagentV1ListBooksResponse?: shared.GoogleExampleLibraryagentV1ListBooksResponse;
    statusCode: number;
}
