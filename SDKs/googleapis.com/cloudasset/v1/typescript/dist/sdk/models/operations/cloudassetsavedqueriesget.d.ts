import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class CloudassetSavedQueriesGetPathParams extends SpeakeasyBase {
    name: string;
}
export declare class CloudassetSavedQueriesGetQueryParams extends SpeakeasyBase {
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
export declare class CloudassetSavedQueriesGetSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class CloudassetSavedQueriesGetRequest extends SpeakeasyBase {
    pathParams: CloudassetSavedQueriesGetPathParams;
    queryParams: CloudassetSavedQueriesGetQueryParams;
    security: CloudassetSavedQueriesGetSecurity;
}
export declare class CloudassetSavedQueriesGetResponse extends SpeakeasyBase {
    contentType: string;
    savedQuery?: shared.SavedQuery;
    statusCode: number;
}
