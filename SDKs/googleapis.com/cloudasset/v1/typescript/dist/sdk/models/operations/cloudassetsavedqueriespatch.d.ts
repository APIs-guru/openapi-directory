import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class CloudassetSavedQueriesPatchPathParams extends SpeakeasyBase {
    name: string;
}
export declare class CloudassetSavedQueriesPatchQueryParams extends SpeakeasyBase {
    dollarXgafv?: shared.XgafvEnum;
    accessToken?: string;
    alt?: shared.AltEnum;
    callback?: string;
    fields?: string;
    key?: string;
    oauthToken?: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    updateMask?: string;
    uploadType?: string;
    uploadProtocol?: string;
}
export declare class CloudassetSavedQueriesPatchSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class CloudassetSavedQueriesPatchRequest extends SpeakeasyBase {
    pathParams: CloudassetSavedQueriesPatchPathParams;
    queryParams: CloudassetSavedQueriesPatchQueryParams;
    request?: shared.SavedQueryInput;
    security: CloudassetSavedQueriesPatchSecurity;
}
export declare class CloudassetSavedQueriesPatchResponse extends SpeakeasyBase {
    contentType: string;
    savedQuery?: shared.SavedQuery;
    statusCode: number;
}
