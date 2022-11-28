import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DoubleclicksearchReportsRequestQueryParams extends SpeakeasyBase {
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
export declare class DoubleclicksearchReportsRequestSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DoubleclicksearchReportsRequestRequest extends SpeakeasyBase {
    queryParams: DoubleclicksearchReportsRequestQueryParams;
    request?: shared.ReportRequest;
    security: DoubleclicksearchReportsRequestSecurity;
}
export declare class DoubleclicksearchReportsRequestResponse extends SpeakeasyBase {
    contentType: string;
    report?: shared.Report;
    statusCode: number;
}
