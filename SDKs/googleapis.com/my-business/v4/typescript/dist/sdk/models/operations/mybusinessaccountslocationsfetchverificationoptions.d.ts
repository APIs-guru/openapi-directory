import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class MybusinessAccountsLocationsFetchVerificationOptionsPathParams extends SpeakeasyBase {
    name: string;
}
export declare class MybusinessAccountsLocationsFetchVerificationOptionsQueryParams extends SpeakeasyBase {
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
export declare class MybusinessAccountsLocationsFetchVerificationOptionsRequest extends SpeakeasyBase {
    pathParams: MybusinessAccountsLocationsFetchVerificationOptionsPathParams;
    queryParams: MybusinessAccountsLocationsFetchVerificationOptionsQueryParams;
    request?: shared.FetchVerificationOptionsRequest;
}
export declare class MybusinessAccountsLocationsFetchVerificationOptionsResponse extends SpeakeasyBase {
    contentType: string;
    fetchVerificationOptionsResponse?: shared.FetchVerificationOptionsResponse;
    statusCode: number;
}
