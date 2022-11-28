import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DlpProjectsLocationsDlpJobsFinishPathParams extends SpeakeasyBase {
    name: string;
}
export declare class DlpProjectsLocationsDlpJobsFinishQueryParams extends SpeakeasyBase {
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
export declare class DlpProjectsLocationsDlpJobsFinishSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DlpProjectsLocationsDlpJobsFinishRequest extends SpeakeasyBase {
    pathParams: DlpProjectsLocationsDlpJobsFinishPathParams;
    queryParams: DlpProjectsLocationsDlpJobsFinishQueryParams;
    request?: Map<string, any>;
    security: DlpProjectsLocationsDlpJobsFinishSecurity;
}
export declare class DlpProjectsLocationsDlpJobsFinishResponse extends SpeakeasyBase {
    contentType: string;
    googleProtobufEmpty?: Map<string, any>;
    statusCode: number;
}
