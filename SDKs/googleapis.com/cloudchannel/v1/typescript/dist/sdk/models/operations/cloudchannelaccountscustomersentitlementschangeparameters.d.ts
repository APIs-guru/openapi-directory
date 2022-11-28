import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class CloudchannelAccountsCustomersEntitlementsChangeParametersPathParams extends SpeakeasyBase {
    name: string;
}
export declare class CloudchannelAccountsCustomersEntitlementsChangeParametersQueryParams extends SpeakeasyBase {
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
export declare class CloudchannelAccountsCustomersEntitlementsChangeParametersSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class CloudchannelAccountsCustomersEntitlementsChangeParametersRequest extends SpeakeasyBase {
    pathParams: CloudchannelAccountsCustomersEntitlementsChangeParametersPathParams;
    queryParams: CloudchannelAccountsCustomersEntitlementsChangeParametersQueryParams;
    request?: shared.GoogleCloudChannelV1ChangeParametersRequestInput;
    security: CloudchannelAccountsCustomersEntitlementsChangeParametersSecurity;
}
export declare class CloudchannelAccountsCustomersEntitlementsChangeParametersResponse extends SpeakeasyBase {
    contentType: string;
    googleLongrunningOperation?: shared.GoogleLongrunningOperation;
    statusCode: number;
}
