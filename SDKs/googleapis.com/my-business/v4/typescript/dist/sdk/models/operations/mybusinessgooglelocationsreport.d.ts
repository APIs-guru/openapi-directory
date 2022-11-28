import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class MybusinessGoogleLocationsReportPathParams extends SpeakeasyBase {
    name: string;
}
export declare class MybusinessGoogleLocationsReportQueryParams extends SpeakeasyBase {
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
export declare class MybusinessGoogleLocationsReportRequest extends SpeakeasyBase {
    pathParams: MybusinessGoogleLocationsReportPathParams;
    queryParams: MybusinessGoogleLocationsReportQueryParams;
    request?: shared.ReportGoogleLocationRequest;
}
export declare class MybusinessGoogleLocationsReportResponse extends SpeakeasyBase {
    contentType: string;
    empty?: Map<string, any>;
    statusCode: number;
}
