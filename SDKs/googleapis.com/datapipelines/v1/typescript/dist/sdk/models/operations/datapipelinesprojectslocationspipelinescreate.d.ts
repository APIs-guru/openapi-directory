import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class DatapipelinesProjectsLocationsPipelinesCreatePathParams extends SpeakeasyBase {
    parent: string;
}
export declare class DatapipelinesProjectsLocationsPipelinesCreateQueryParams extends SpeakeasyBase {
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
export declare class DatapipelinesProjectsLocationsPipelinesCreateSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DatapipelinesProjectsLocationsPipelinesCreateRequest extends SpeakeasyBase {
    pathParams: DatapipelinesProjectsLocationsPipelinesCreatePathParams;
    queryParams: DatapipelinesProjectsLocationsPipelinesCreateQueryParams;
    request?: shared.GoogleCloudDatapipelinesV1Pipeline;
    security: DatapipelinesProjectsLocationsPipelinesCreateSecurity;
}
export declare class DatapipelinesProjectsLocationsPipelinesCreateResponse extends SpeakeasyBase {
    contentType: string;
    googleCloudDatapipelinesV1Pipeline?: shared.GoogleCloudDatapipelinesV1Pipeline;
    statusCode: number;
}
