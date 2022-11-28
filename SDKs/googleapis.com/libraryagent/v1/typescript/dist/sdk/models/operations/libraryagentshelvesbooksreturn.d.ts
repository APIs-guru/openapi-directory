import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class LibraryagentShelvesBooksReturnPathParams extends SpeakeasyBase {
    name: string;
}
export declare class LibraryagentShelvesBooksReturnQueryParams extends SpeakeasyBase {
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
export declare class LibraryagentShelvesBooksReturnSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class LibraryagentShelvesBooksReturnRequest extends SpeakeasyBase {
    pathParams: LibraryagentShelvesBooksReturnPathParams;
    queryParams: LibraryagentShelvesBooksReturnQueryParams;
    security: LibraryagentShelvesBooksReturnSecurity;
}
export declare class LibraryagentShelvesBooksReturnResponse extends SpeakeasyBase {
    contentType: string;
    googleExampleLibraryagentV1Book?: shared.GoogleExampleLibraryagentV1Book;
    statusCode: number;
}
