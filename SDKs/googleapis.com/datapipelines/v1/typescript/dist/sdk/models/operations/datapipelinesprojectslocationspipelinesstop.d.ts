import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class DatapipelinesProjectsLocationsPipelinesStopPathParams extends SpeakeasyBase {
    name: string;
}
export declare class DatapipelinesProjectsLocationsPipelinesStopQueryParams extends SpeakeasyBase {
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
export declare class DatapipelinesProjectsLocationsPipelinesStopSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DatapipelinesProjectsLocationsPipelinesStopRequest extends SpeakeasyBase {
    pathParams: DatapipelinesProjectsLocationsPipelinesStopPathParams;
    queryParams: DatapipelinesProjectsLocationsPipelinesStopQueryParams;
    request?: Map<string, any>;
    security: DatapipelinesProjectsLocationsPipelinesStopSecurity;
}
export declare class DatapipelinesProjectsLocationsPipelinesStopResponse extends SpeakeasyBase {
    contentType: string;
    googleCloudDatapipelinesV1Pipeline?: shared.GoogleCloudDatapipelinesV1Pipeline;
    statusCode: number;
}
