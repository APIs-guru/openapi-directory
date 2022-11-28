import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class CloudchannelAccountsCustomersEntitlementsStartPaidServicePathParams extends SpeakeasyBase {
    name: string;
}
export declare class CloudchannelAccountsCustomersEntitlementsStartPaidServiceQueryParams extends SpeakeasyBase {
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
export declare class CloudchannelAccountsCustomersEntitlementsStartPaidServiceSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class CloudchannelAccountsCustomersEntitlementsStartPaidServiceRequest extends SpeakeasyBase {
    pathParams: CloudchannelAccountsCustomersEntitlementsStartPaidServicePathParams;
    queryParams: CloudchannelAccountsCustomersEntitlementsStartPaidServiceQueryParams;
    request?: shared.GoogleCloudChannelV1StartPaidServiceRequest;
    security: CloudchannelAccountsCustomersEntitlementsStartPaidServiceSecurity;
}
export declare class CloudchannelAccountsCustomersEntitlementsStartPaidServiceResponse extends SpeakeasyBase {
    contentType: string;
    googleLongrunningOperation?: shared.GoogleLongrunningOperation;
    statusCode: number;
}
