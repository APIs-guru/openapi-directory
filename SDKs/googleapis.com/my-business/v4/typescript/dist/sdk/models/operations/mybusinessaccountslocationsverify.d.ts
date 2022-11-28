import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class MybusinessAccountsLocationsVerifyPathParams extends SpeakeasyBase {
    name: string;
}
export declare class MybusinessAccountsLocationsVerifyQueryParams extends SpeakeasyBase {
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
export declare class MybusinessAccountsLocationsVerifyRequest extends SpeakeasyBase {
    pathParams: MybusinessAccountsLocationsVerifyPathParams;
    queryParams: MybusinessAccountsLocationsVerifyQueryParams;
    request?: shared.VerifyLocationRequest;
}
export declare class MybusinessAccountsLocationsVerifyResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    verifyLocationResponse?: shared.VerifyLocationResponse;
}
