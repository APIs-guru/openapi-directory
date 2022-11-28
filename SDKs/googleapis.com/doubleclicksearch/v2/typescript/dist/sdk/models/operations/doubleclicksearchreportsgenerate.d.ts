import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DoubleclicksearchReportsGenerateQueryParams extends SpeakeasyBase {
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
export declare class DoubleclicksearchReportsGenerateSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DoubleclicksearchReportsGenerateRequest extends SpeakeasyBase {
    queryParams: DoubleclicksearchReportsGenerateQueryParams;
    request?: shared.ReportRequest;
    security: DoubleclicksearchReportsGenerateSecurity;
}
export declare class DoubleclicksearchReportsGenerateResponse extends SpeakeasyBase {
    contentType: string;
    report?: shared.Report;
    statusCode: number;
}
