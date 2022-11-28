import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DfareportingAccountsPatchPathParams extends SpeakeasyBase {
    profileId: string;
}
export declare class DfareportingAccountsPatchQueryParams extends SpeakeasyBase {
    dollarXgafv?: shared.XgafvEnum;
    accessToken?: string;
    alt?: shared.AltEnum;
    callback?: string;
    fields?: string;
    id: string;
    key?: string;
    oauthToken?: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    uploadType?: string;
    uploadProtocol?: string;
}
export declare class DfareportingAccountsPatchSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DfareportingAccountsPatchRequest extends SpeakeasyBase {
    pathParams: DfareportingAccountsPatchPathParams;
    queryParams: DfareportingAccountsPatchQueryParams;
    request?: shared.Account;
    security: DfareportingAccountsPatchSecurity;
}
export declare class DfareportingAccountsPatchResponse extends SpeakeasyBase {
    account?: shared.Account;
    contentType: string;
    statusCode: number;
}
