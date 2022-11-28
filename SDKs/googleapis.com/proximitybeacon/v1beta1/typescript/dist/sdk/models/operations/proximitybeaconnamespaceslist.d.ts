import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ProximitybeaconNamespacesListQueryParams extends SpeakeasyBase {
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
export declare class ProximitybeaconNamespacesListSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class ProximitybeaconNamespacesListRequest extends SpeakeasyBase {
    queryParams: ProximitybeaconNamespacesListQueryParams;
    security: ProximitybeaconNamespacesListSecurity;
}
export declare class ProximitybeaconNamespacesListResponse extends SpeakeasyBase {
    contentType: string;
    listNamespacesResponse?: shared.ListNamespacesResponse;
    statusCode: number;
}
