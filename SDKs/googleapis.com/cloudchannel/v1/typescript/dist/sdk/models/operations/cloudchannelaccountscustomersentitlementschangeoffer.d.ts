import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class CloudchannelAccountsCustomersEntitlementsChangeOfferPathParams extends SpeakeasyBase {
    name: string;
}
export declare class CloudchannelAccountsCustomersEntitlementsChangeOfferQueryParams extends SpeakeasyBase {
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
export declare class CloudchannelAccountsCustomersEntitlementsChangeOfferSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class CloudchannelAccountsCustomersEntitlementsChangeOfferRequest extends SpeakeasyBase {
    pathParams: CloudchannelAccountsCustomersEntitlementsChangeOfferPathParams;
    queryParams: CloudchannelAccountsCustomersEntitlementsChangeOfferQueryParams;
    request?: shared.GoogleCloudChannelV1ChangeOfferRequestInput;
    security: CloudchannelAccountsCustomersEntitlementsChangeOfferSecurity;
}
export declare class CloudchannelAccountsCustomersEntitlementsChangeOfferResponse extends SpeakeasyBase {
    contentType: string;
    googleLongrunningOperation?: shared.GoogleLongrunningOperation;
    statusCode: number;
}
