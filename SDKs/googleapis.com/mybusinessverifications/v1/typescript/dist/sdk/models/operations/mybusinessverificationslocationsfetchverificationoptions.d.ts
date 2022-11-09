import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class MybusinessverificationsLocationsFetchVerificationOptionsPathParams extends SpeakeasyBase {
    location: string;
}
export declare class MybusinessverificationsLocationsFetchVerificationOptionsQueryParams extends SpeakeasyBase {
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
export declare class MybusinessverificationsLocationsFetchVerificationOptionsRequest extends SpeakeasyBase {
    pathParams: MybusinessverificationsLocationsFetchVerificationOptionsPathParams;
    queryParams: MybusinessverificationsLocationsFetchVerificationOptionsQueryParams;
    request?: shared.FetchVerificationOptionsRequest;
}
export declare class MybusinessverificationsLocationsFetchVerificationOptionsResponse extends SpeakeasyBase {
    contentType: string;
    fetchVerificationOptionsResponse?: shared.FetchVerificationOptionsResponse;
    statusCode: number;
}
