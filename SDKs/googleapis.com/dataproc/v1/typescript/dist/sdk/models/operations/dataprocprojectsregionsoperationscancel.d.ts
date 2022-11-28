import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DataprocProjectsRegionsOperationsCancelPathParams extends SpeakeasyBase {
    name: string;
}
export declare class DataprocProjectsRegionsOperationsCancelQueryParams extends SpeakeasyBase {
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
export declare class DataprocProjectsRegionsOperationsCancelSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DataprocProjectsRegionsOperationsCancelRequest extends SpeakeasyBase {
    pathParams: DataprocProjectsRegionsOperationsCancelPathParams;
    queryParams: DataprocProjectsRegionsOperationsCancelQueryParams;
    security: DataprocProjectsRegionsOperationsCancelSecurity;
}
export declare class DataprocProjectsRegionsOperationsCancelResponse extends SpeakeasyBase {
    contentType: string;
    empty?: Map<string, any>;
    statusCode: number;
}
