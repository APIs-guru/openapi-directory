import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class WebriskProjectsSubmissionsCreatePathParams extends SpeakeasyBase {
    parent: string;
}
export declare class WebriskProjectsSubmissionsCreateQueryParams extends SpeakeasyBase {
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
export declare class WebriskProjectsSubmissionsCreateSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class WebriskProjectsSubmissionsCreateRequest extends SpeakeasyBase {
    pathParams: WebriskProjectsSubmissionsCreatePathParams;
    queryParams: WebriskProjectsSubmissionsCreateQueryParams;
    request?: shared.GoogleCloudWebriskV1Submission;
    security: WebriskProjectsSubmissionsCreateSecurity;
}
export declare class WebriskProjectsSubmissionsCreateResponse extends SpeakeasyBase {
    contentType: string;
    googleCloudWebriskV1Submission?: shared.GoogleCloudWebriskV1Submission;
    statusCode: number;
}
