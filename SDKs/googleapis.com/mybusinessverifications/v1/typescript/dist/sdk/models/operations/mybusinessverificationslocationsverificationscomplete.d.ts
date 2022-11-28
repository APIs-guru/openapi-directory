import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class MybusinessverificationsLocationsVerificationsCompletePathParams extends SpeakeasyBase {
    name: string;
}
export declare class MybusinessverificationsLocationsVerificationsCompleteQueryParams extends SpeakeasyBase {
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
export declare class MybusinessverificationsLocationsVerificationsCompleteRequest extends SpeakeasyBase {
    pathParams: MybusinessverificationsLocationsVerificationsCompletePathParams;
    queryParams: MybusinessverificationsLocationsVerificationsCompleteQueryParams;
    request?: shared.CompleteVerificationRequest;
}
export declare class MybusinessverificationsLocationsVerificationsCompleteResponse extends SpeakeasyBase {
    completeVerificationResponse?: shared.CompleteVerificationResponse;
    contentType: string;
    statusCode: number;
}
