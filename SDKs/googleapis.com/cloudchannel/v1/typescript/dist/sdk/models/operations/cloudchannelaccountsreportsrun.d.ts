import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class CloudchannelAccountsReportsRunPathParams extends SpeakeasyBase {
    name: string;
}
export declare class CloudchannelAccountsReportsRunQueryParams extends SpeakeasyBase {
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
export declare class CloudchannelAccountsReportsRunSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class CloudchannelAccountsReportsRunRequest extends SpeakeasyBase {
    pathParams: CloudchannelAccountsReportsRunPathParams;
    queryParams: CloudchannelAccountsReportsRunQueryParams;
    request?: shared.GoogleCloudChannelV1RunReportJobRequest;
    security: CloudchannelAccountsReportsRunSecurity;
}
export declare class CloudchannelAccountsReportsRunResponse extends SpeakeasyBase {
    contentType: string;
    googleLongrunningOperation?: shared.GoogleLongrunningOperation;
    statusCode: number;
}
