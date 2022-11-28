import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class CloudchannelAccountsCustomersEntitlementsLookupOfferPathParams extends SpeakeasyBase {
    entitlement: string;
}
export declare class CloudchannelAccountsCustomersEntitlementsLookupOfferQueryParams extends SpeakeasyBase {
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
export declare class CloudchannelAccountsCustomersEntitlementsLookupOfferSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class CloudchannelAccountsCustomersEntitlementsLookupOfferRequest extends SpeakeasyBase {
    pathParams: CloudchannelAccountsCustomersEntitlementsLookupOfferPathParams;
    queryParams: CloudchannelAccountsCustomersEntitlementsLookupOfferQueryParams;
    security: CloudchannelAccountsCustomersEntitlementsLookupOfferSecurity;
}
export declare class CloudchannelAccountsCustomersEntitlementsLookupOfferResponse extends SpeakeasyBase {
    contentType: string;
    googleCloudChannelV1Offer?: shared.GoogleCloudChannelV1Offer;
    statusCode: number;
}
