import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class CloudchannelAccountsCustomersImportPathParams extends SpeakeasyBase {
    parent: string;
}
export declare class CloudchannelAccountsCustomersImportQueryParams extends SpeakeasyBase {
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
export declare class CloudchannelAccountsCustomersImportSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class CloudchannelAccountsCustomersImportRequest extends SpeakeasyBase {
    pathParams: CloudchannelAccountsCustomersImportPathParams;
    queryParams: CloudchannelAccountsCustomersImportQueryParams;
    request?: shared.GoogleCloudChannelV1ImportCustomerRequest;
    security: CloudchannelAccountsCustomersImportSecurity;
}
export declare class CloudchannelAccountsCustomersImportResponse extends SpeakeasyBase {
    contentType: string;
    googleCloudChannelV1Customer?: shared.GoogleCloudChannelV1Customer;
    statusCode: number;
}
