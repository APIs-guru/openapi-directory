import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class OndemandscanningProjectsLocationsOperationsCancelPathParams extends SpeakeasyBase {
    name: string;
}
export declare class OndemandscanningProjectsLocationsOperationsCancelQueryParams extends SpeakeasyBase {
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
export declare class OndemandscanningProjectsLocationsOperationsCancelSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class OndemandscanningProjectsLocationsOperationsCancelRequest extends SpeakeasyBase {
    pathParams: OndemandscanningProjectsLocationsOperationsCancelPathParams;
    queryParams: OndemandscanningProjectsLocationsOperationsCancelQueryParams;
    security: OndemandscanningProjectsLocationsOperationsCancelSecurity;
}
export declare class OndemandscanningProjectsLocationsOperationsCancelResponse extends SpeakeasyBase {
    contentType: string;
    empty?: Map<string, any>;
    statusCode: number;
}
