import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class CloudassetSavedQueriesDeletePathParams extends SpeakeasyBase {
    name: string;
}
export declare class CloudassetSavedQueriesDeleteQueryParams extends SpeakeasyBase {
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
export declare class CloudassetSavedQueriesDeleteSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class CloudassetSavedQueriesDeleteRequest extends SpeakeasyBase {
    pathParams: CloudassetSavedQueriesDeletePathParams;
    queryParams: CloudassetSavedQueriesDeleteQueryParams;
    security: CloudassetSavedQueriesDeleteSecurity;
}
export declare class CloudassetSavedQueriesDeleteResponse extends SpeakeasyBase {
    contentType: string;
    empty?: Map<string, any>;
    statusCode: number;
}
