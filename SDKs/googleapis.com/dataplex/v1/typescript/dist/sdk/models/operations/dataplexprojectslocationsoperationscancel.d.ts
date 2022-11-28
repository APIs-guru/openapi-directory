import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DataplexProjectsLocationsOperationsCancelPathParams extends SpeakeasyBase {
    name: string;
}
export declare class DataplexProjectsLocationsOperationsCancelQueryParams extends SpeakeasyBase {
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
export declare class DataplexProjectsLocationsOperationsCancelSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DataplexProjectsLocationsOperationsCancelRequest extends SpeakeasyBase {
    pathParams: DataplexProjectsLocationsOperationsCancelPathParams;
    queryParams: DataplexProjectsLocationsOperationsCancelQueryParams;
    request?: Map<string, any>;
    security: DataplexProjectsLocationsOperationsCancelSecurity;
}
export declare class DataplexProjectsLocationsOperationsCancelResponse extends SpeakeasyBase {
    contentType: string;
    empty?: Map<string, any>;
    statusCode: number;
}
