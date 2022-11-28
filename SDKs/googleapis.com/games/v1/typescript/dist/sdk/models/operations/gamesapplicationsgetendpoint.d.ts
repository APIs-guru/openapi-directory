import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum GamesApplicationsGetEndPointEndPointTypeEnum {
    EndPointTypeUnspecified = "END_POINT_TYPE_UNSPECIFIED",
    ProfileCreation = "PROFILE_CREATION",
    ProfileSettings = "PROFILE_SETTINGS"
}
export declare class GamesApplicationsGetEndPointQueryParams extends SpeakeasyBase {
    dollarXgafv?: shared.XgafvEnum;
    accessToken?: string;
    alt?: shared.AltEnum;
    applicationId?: string;
    callback?: string;
    endPointType?: GamesApplicationsGetEndPointEndPointTypeEnum;
    fields?: string;
    key?: string;
    oauthToken?: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    uploadType?: string;
    uploadProtocol?: string;
}
export declare class GamesApplicationsGetEndPointSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class GamesApplicationsGetEndPointRequest extends SpeakeasyBase {
    queryParams: GamesApplicationsGetEndPointQueryParams;
    security: GamesApplicationsGetEndPointSecurity;
}
export declare class GamesApplicationsGetEndPointResponse extends SpeakeasyBase {
    contentType: string;
    endPoint?: shared.EndPoint;
    statusCode: number;
}
