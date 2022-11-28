import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class LifesciencesProjectsLocationsOperationsCancelPathParams extends SpeakeasyBase {
    name: string;
}
export declare class LifesciencesProjectsLocationsOperationsCancelQueryParams extends SpeakeasyBase {
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
export declare class LifesciencesProjectsLocationsOperationsCancelSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class LifesciencesProjectsLocationsOperationsCancelRequest extends SpeakeasyBase {
    pathParams: LifesciencesProjectsLocationsOperationsCancelPathParams;
    queryParams: LifesciencesProjectsLocationsOperationsCancelQueryParams;
    request?: Map<string, any>;
    security: LifesciencesProjectsLocationsOperationsCancelSecurity;
}
export declare class LifesciencesProjectsLocationsOperationsCancelResponse extends SpeakeasyBase {
    contentType: string;
    empty?: Map<string, any>;
    statusCode: number;
}
