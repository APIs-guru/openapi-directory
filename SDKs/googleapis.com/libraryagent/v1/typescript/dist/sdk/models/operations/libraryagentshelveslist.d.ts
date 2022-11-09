import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class LibraryagentShelvesListQueryParams extends SpeakeasyBase {
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
export declare class LibraryagentShelvesListSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class LibraryagentShelvesListRequest extends SpeakeasyBase {
    queryParams: LibraryagentShelvesListQueryParams;
    security: LibraryagentShelvesListSecurity;
}
export declare class LibraryagentShelvesListResponse extends SpeakeasyBase {
    contentType: string;
    googleExampleLibraryagentV1ListShelvesResponse?: shared.GoogleExampleLibraryagentV1ListShelvesResponse;
    statusCode: number;
}
