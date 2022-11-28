import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DoubleclicksearchReportsGetFilePathParams extends SpeakeasyBase {
    reportFragment: number;
    reportId: string;
}
export declare class DoubleclicksearchReportsGetFileQueryParams extends SpeakeasyBase {
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
export declare class DoubleclicksearchReportsGetFileSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DoubleclicksearchReportsGetFileRequest extends SpeakeasyBase {
    pathParams: DoubleclicksearchReportsGetFilePathParams;
    queryParams: DoubleclicksearchReportsGetFileQueryParams;
    security: DoubleclicksearchReportsGetFileSecurity;
}
export declare class DoubleclicksearchReportsGetFileResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
