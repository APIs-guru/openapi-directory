import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class DatapipelinesProjectsLocationsPipelinesDeletePathParams extends SpeakeasyBase {
    name: string;
}
export declare class DatapipelinesProjectsLocationsPipelinesDeleteQueryParams extends SpeakeasyBase {
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
export declare class DatapipelinesProjectsLocationsPipelinesDeleteSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DatapipelinesProjectsLocationsPipelinesDeleteRequest extends SpeakeasyBase {
    pathParams: DatapipelinesProjectsLocationsPipelinesDeletePathParams;
    queryParams: DatapipelinesProjectsLocationsPipelinesDeleteQueryParams;
    security: DatapipelinesProjectsLocationsPipelinesDeleteSecurity;
}
export declare class DatapipelinesProjectsLocationsPipelinesDeleteResponse extends SpeakeasyBase {
    contentType: string;
    googleProtobufEmpty?: Map<string, any>;
    statusCode: number;
}
