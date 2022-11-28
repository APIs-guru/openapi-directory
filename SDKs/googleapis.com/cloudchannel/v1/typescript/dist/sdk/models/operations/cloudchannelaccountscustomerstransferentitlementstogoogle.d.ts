import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class CloudchannelAccountsCustomersTransferEntitlementsToGooglePathParams extends SpeakeasyBase {
    parent: string;
}
export declare class CloudchannelAccountsCustomersTransferEntitlementsToGoogleQueryParams extends SpeakeasyBase {
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
export declare class CloudchannelAccountsCustomersTransferEntitlementsToGoogleSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class CloudchannelAccountsCustomersTransferEntitlementsToGoogleRequest extends SpeakeasyBase {
    pathParams: CloudchannelAccountsCustomersTransferEntitlementsToGooglePathParams;
    queryParams: CloudchannelAccountsCustomersTransferEntitlementsToGoogleQueryParams;
    request?: shared.GoogleCloudChannelV1TransferEntitlementsToGoogleRequestInput;
    security: CloudchannelAccountsCustomersTransferEntitlementsToGoogleSecurity;
}
export declare class CloudchannelAccountsCustomersTransferEntitlementsToGoogleResponse extends SpeakeasyBase {
    contentType: string;
    googleLongrunningOperation?: shared.GoogleLongrunningOperation;
    statusCode: number;
}
