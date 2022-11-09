import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class MybusinessverificationsLocationsVerifyPathParams extends SpeakeasyBase {
    name: string;
}
export declare class MybusinessverificationsLocationsVerifyQueryParams extends SpeakeasyBase {
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
export declare class MybusinessverificationsLocationsVerifyRequest extends SpeakeasyBase {
    pathParams: MybusinessverificationsLocationsVerifyPathParams;
    queryParams: MybusinessverificationsLocationsVerifyQueryParams;
    request?: shared.VerifyLocationRequest;
}
export declare class MybusinessverificationsLocationsVerifyResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    verifyLocationResponse?: shared.VerifyLocationResponse;
}
