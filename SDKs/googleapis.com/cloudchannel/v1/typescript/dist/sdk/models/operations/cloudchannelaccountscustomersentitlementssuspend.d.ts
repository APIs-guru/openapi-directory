import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class CloudchannelAccountsCustomersEntitlementsSuspendPathParams extends SpeakeasyBase {
    name: string;
}
export declare class CloudchannelAccountsCustomersEntitlementsSuspendQueryParams extends SpeakeasyBase {
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
export declare class CloudchannelAccountsCustomersEntitlementsSuspendSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class CloudchannelAccountsCustomersEntitlementsSuspendRequest extends SpeakeasyBase {
    pathParams: CloudchannelAccountsCustomersEntitlementsSuspendPathParams;
    queryParams: CloudchannelAccountsCustomersEntitlementsSuspendQueryParams;
    request?: shared.GoogleCloudChannelV1SuspendEntitlementRequest;
    security: CloudchannelAccountsCustomersEntitlementsSuspendSecurity;
}
export declare class CloudchannelAccountsCustomersEntitlementsSuspendResponse extends SpeakeasyBase {
    contentType: string;
    googleLongrunningOperation?: shared.GoogleLongrunningOperation;
    statusCode: number;
}
