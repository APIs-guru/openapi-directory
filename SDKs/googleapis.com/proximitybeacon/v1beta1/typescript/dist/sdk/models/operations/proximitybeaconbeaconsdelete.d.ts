import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ProximitybeaconBeaconsDeletePathParams extends SpeakeasyBase {
    beaconName: string;
}
export declare class ProximitybeaconBeaconsDeleteQueryParams extends SpeakeasyBase {
    dollarXgafv?: shared.XgafvEnum;
    accessToken?: string;
    alt?: shared.AltEnum;
    callback?: string;
    fields?: string;
    key?: string;
    oauthToken?: string;
    prettyPrint?: boolean;
    projectId?: string;
    quotaUser?: string;
    uploadType?: string;
    uploadProtocol?: string;
}
export declare class ProximitybeaconBeaconsDeleteSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class ProximitybeaconBeaconsDeleteRequest extends SpeakeasyBase {
    pathParams: ProximitybeaconBeaconsDeletePathParams;
    queryParams: ProximitybeaconBeaconsDeleteQueryParams;
    security: ProximitybeaconBeaconsDeleteSecurity;
}
export declare class ProximitybeaconBeaconsDeleteResponse extends SpeakeasyBase {
    contentType: string;
    empty?: Map<string, any>;
    statusCode: number;
}
