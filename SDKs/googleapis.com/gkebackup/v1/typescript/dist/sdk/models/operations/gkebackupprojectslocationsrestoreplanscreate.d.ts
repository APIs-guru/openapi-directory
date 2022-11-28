import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GkebackupProjectsLocationsRestorePlansCreatePathParams extends SpeakeasyBase {
    parent: string;
}
export declare class GkebackupProjectsLocationsRestorePlansCreateQueryParams extends SpeakeasyBase {
    dollarXgafv?: shared.XgafvEnum;
    accessToken?: string;
    alt?: shared.AltEnum;
    callback?: string;
    fields?: string;
    key?: string;
    oauthToken?: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    restorePlanId?: string;
    uploadType?: string;
    uploadProtocol?: string;
}
export declare class GkebackupProjectsLocationsRestorePlansCreateSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class GkebackupProjectsLocationsRestorePlansCreateRequest extends SpeakeasyBase {
    pathParams: GkebackupProjectsLocationsRestorePlansCreatePathParams;
    queryParams: GkebackupProjectsLocationsRestorePlansCreateQueryParams;
    request?: shared.RestorePlanInput;
    security: GkebackupProjectsLocationsRestorePlansCreateSecurity;
}
export declare class GkebackupProjectsLocationsRestorePlansCreateResponse extends SpeakeasyBase {
    contentType: string;
    googleLongrunningOperation?: shared.GoogleLongrunningOperation;
    statusCode: number;
}
