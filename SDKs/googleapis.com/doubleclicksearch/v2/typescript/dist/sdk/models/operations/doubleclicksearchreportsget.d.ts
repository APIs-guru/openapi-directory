import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DoubleclicksearchReportsGetPathParams extends SpeakeasyBase {
    reportId: string;
}
export declare class DoubleclicksearchReportsGetQueryParams extends SpeakeasyBase {
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
export declare class DoubleclicksearchReportsGetSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DoubleclicksearchReportsGetRequest extends SpeakeasyBase {
    pathParams: DoubleclicksearchReportsGetPathParams;
    queryParams: DoubleclicksearchReportsGetQueryParams;
    security: DoubleclicksearchReportsGetSecurity;
}
export declare class DoubleclicksearchReportsGetResponse extends SpeakeasyBase {
    contentType: string;
    report?: shared.Report;
    statusCode: number;
}
