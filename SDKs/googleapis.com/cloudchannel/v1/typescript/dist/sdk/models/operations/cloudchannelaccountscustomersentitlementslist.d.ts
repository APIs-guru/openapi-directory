import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class CloudchannelAccountsCustomersEntitlementsListPathParams extends SpeakeasyBase {
    parent: string;
}
export declare class CloudchannelAccountsCustomersEntitlementsListQueryParams extends SpeakeasyBase {
    dollarXgafv?: shared.XgafvEnum;
    accessToken?: string;
    alt?: shared.AltEnum;
    callback?: string;
    fields?: string;
    key?: string;
    oauthToken?: string;
    pageSize?: number;
    pageToken?: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    uploadType?: string;
    uploadProtocol?: string;
}
export declare class CloudchannelAccountsCustomersEntitlementsListSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class CloudchannelAccountsCustomersEntitlementsListRequest extends SpeakeasyBase {
    pathParams: CloudchannelAccountsCustomersEntitlementsListPathParams;
    queryParams: CloudchannelAccountsCustomersEntitlementsListQueryParams;
    security: CloudchannelAccountsCustomersEntitlementsListSecurity;
}
export declare class CloudchannelAccountsCustomersEntitlementsListResponse extends SpeakeasyBase {
    contentType: string;
    googleCloudChannelV1ListEntitlementsResponse?: shared.GoogleCloudChannelV1ListEntitlementsResponse;
    statusCode: number;
}
