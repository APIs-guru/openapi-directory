import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ProximitybeaconBeaconsListQueryParams extends SpeakeasyBase {
    dollarXgafv?: shared.XgafvEnum;
    accessToken?: string;
    alt?: shared.AltEnum;
    callback?: string;
    fields?: string;
    key?: string;
    oauthToken?: string;
    pageSize?: number;
    pageToken?: string;
    prettyPrint?: boolean;
    projectId?: string;
    q?: string;
    quotaUser?: string;
    uploadType?: string;
    uploadProtocol?: string;
}
export declare class ProximitybeaconBeaconsListSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class ProximitybeaconBeaconsListRequest extends SpeakeasyBase {
    queryParams: ProximitybeaconBeaconsListQueryParams;
    security: ProximitybeaconBeaconsListSecurity;
}
export declare class ProximitybeaconBeaconsListResponse extends SpeakeasyBase {
    contentType: string;
    listBeaconsResponse?: shared.ListBeaconsResponse;
    statusCode: number;
}
