import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class CloudchannelAccountsCustomersTransferEntitlementsPathParams extends SpeakeasyBase {
    parent: string;
}
export declare class CloudchannelAccountsCustomersTransferEntitlementsQueryParams extends SpeakeasyBase {
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
export declare class CloudchannelAccountsCustomersTransferEntitlementsSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class CloudchannelAccountsCustomersTransferEntitlementsRequest extends SpeakeasyBase {
    pathParams: CloudchannelAccountsCustomersTransferEntitlementsPathParams;
    queryParams: CloudchannelAccountsCustomersTransferEntitlementsQueryParams;
    request?: shared.GoogleCloudChannelV1TransferEntitlementsRequestInput;
    security: CloudchannelAccountsCustomersTransferEntitlementsSecurity;
}
export declare class CloudchannelAccountsCustomersTransferEntitlementsResponse extends SpeakeasyBase {
    contentType: string;
    googleLongrunningOperation?: shared.GoogleLongrunningOperation;
    statusCode: number;
}
