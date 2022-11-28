import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class CloudassetAnalyzeIamPolicyLongrunningPathParams extends SpeakeasyBase {
    scope: string;
}
export declare class CloudassetAnalyzeIamPolicyLongrunningQueryParams extends SpeakeasyBase {
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
export declare class CloudassetAnalyzeIamPolicyLongrunningSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class CloudassetAnalyzeIamPolicyLongrunningRequest extends SpeakeasyBase {
    pathParams: CloudassetAnalyzeIamPolicyLongrunningPathParams;
    queryParams: CloudassetAnalyzeIamPolicyLongrunningQueryParams;
    request?: shared.AnalyzeIamPolicyLongrunningRequest;
    security: CloudassetAnalyzeIamPolicyLongrunningSecurity;
}
export declare class CloudassetAnalyzeIamPolicyLongrunningResponse extends SpeakeasyBase {
    contentType: string;
    operation?: shared.Operation;
    statusCode: number;
}
