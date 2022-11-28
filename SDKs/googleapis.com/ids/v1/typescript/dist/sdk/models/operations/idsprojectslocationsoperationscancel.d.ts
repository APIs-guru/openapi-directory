import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class IdsProjectsLocationsOperationsCancelPathParams extends SpeakeasyBase {
    name: string;
}
export declare class IdsProjectsLocationsOperationsCancelQueryParams extends SpeakeasyBase {
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
export declare class IdsProjectsLocationsOperationsCancelSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class IdsProjectsLocationsOperationsCancelRequest extends SpeakeasyBase {
    pathParams: IdsProjectsLocationsOperationsCancelPathParams;
    queryParams: IdsProjectsLocationsOperationsCancelQueryParams;
    request?: Map<string, any>;
    security: IdsProjectsLocationsOperationsCancelSecurity;
}
export declare class IdsProjectsLocationsOperationsCancelResponse extends SpeakeasyBase {
    contentType: string;
    empty?: Map<string, any>;
    statusCode: number;
}
