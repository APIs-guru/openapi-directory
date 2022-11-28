import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class CloudchannelAccountsCustomersEntitlementsActivatePathParams extends SpeakeasyBase {
    name: string;
}
export declare class CloudchannelAccountsCustomersEntitlementsActivateQueryParams extends SpeakeasyBase {
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
export declare class CloudchannelAccountsCustomersEntitlementsActivateSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class CloudchannelAccountsCustomersEntitlementsActivateRequest extends SpeakeasyBase {
    pathParams: CloudchannelAccountsCustomersEntitlementsActivatePathParams;
    queryParams: CloudchannelAccountsCustomersEntitlementsActivateQueryParams;
    request?: shared.GoogleCloudChannelV1ActivateEntitlementRequest;
    security: CloudchannelAccountsCustomersEntitlementsActivateSecurity;
}
export declare class CloudchannelAccountsCustomersEntitlementsActivateResponse extends SpeakeasyBase {
    contentType: string;
    googleLongrunningOperation?: shared.GoogleLongrunningOperation;
    statusCode: number;
}
