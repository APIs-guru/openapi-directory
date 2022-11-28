import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class LibraryagentShelvesBooksGetPathParams extends SpeakeasyBase {
    name: string;
}
export declare class LibraryagentShelvesBooksGetQueryParams extends SpeakeasyBase {
    dollarXgafv?: shared.XgafvEnum;
    accessToken?: string;
    alt?: shared.AltEnum;
    callback?: string;
    fields?: string;
    key?: string;
    oauthToken?: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    uploadType?: string;
    uploadProtocol?: string;
}
export declare class LibraryagentShelvesBooksGetSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class LibraryagentShelvesBooksGetRequest extends SpeakeasyBase {
    pathParams: LibraryagentShelvesBooksGetPathParams;
    queryParams: LibraryagentShelvesBooksGetQueryParams;
    security: LibraryagentShelvesBooksGetSecurity;
}
export declare class LibraryagentShelvesBooksGetResponse extends SpeakeasyBase {
    contentType: string;
    googleExampleLibraryagentV1Book?: shared.GoogleExampleLibraryagentV1Book;
    statusCode: number;
}
