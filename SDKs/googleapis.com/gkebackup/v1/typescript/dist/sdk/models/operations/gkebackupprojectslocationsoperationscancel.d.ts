import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class GkebackupProjectsLocationsOperationsCancelPathParams extends SpeakeasyBase {
    name: string;
}
export declare class GkebackupProjectsLocationsOperationsCancelQueryParams extends SpeakeasyBase {
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
export declare class GkebackupProjectsLocationsOperationsCancelSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class GkebackupProjectsLocationsOperationsCancelRequest extends SpeakeasyBase {
    pathParams: GkebackupProjectsLocationsOperationsCancelPathParams;
    queryParams: GkebackupProjectsLocationsOperationsCancelQueryParams;
    request?: Map<string, any>;
    security: GkebackupProjectsLocationsOperationsCancelSecurity;
}
export declare class GkebackupProjectsLocationsOperationsCancelResponse extends SpeakeasyBase {
    contentType: string;
    empty?: Map<string, any>;
    statusCode: number;
}
