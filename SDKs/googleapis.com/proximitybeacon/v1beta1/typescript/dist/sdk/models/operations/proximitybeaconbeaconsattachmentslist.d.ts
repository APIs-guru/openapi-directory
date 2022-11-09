import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class ProximitybeaconBeaconsAttachmentsListPathParams extends SpeakeasyBase {
    beaconName: string;
}
export declare class ProximitybeaconBeaconsAttachmentsListQueryParams extends SpeakeasyBase {
    dollarXgafv?: shared.XgafvEnum;
    accessToken?: string;
    alt?: shared.AltEnum;
    callback?: string;
    fields?: string;
    key?: string;
    namespacedType?: string;
    oauthToken?: string;
    prettyPrint?: boolean;
    projectId?: string;
    quotaUser?: string;
    uploadType?: string;
    uploadProtocol?: string;
}
export declare class ProximitybeaconBeaconsAttachmentsListSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class ProximitybeaconBeaconsAttachmentsListRequest extends SpeakeasyBase {
    pathParams: ProximitybeaconBeaconsAttachmentsListPathParams;
    queryParams: ProximitybeaconBeaconsAttachmentsListQueryParams;
    security: ProximitybeaconBeaconsAttachmentsListSecurity;
}
export declare class ProximitybeaconBeaconsAttachmentsListResponse extends SpeakeasyBase {
    contentType: string;
    listBeaconAttachmentsResponse?: shared.ListBeaconAttachmentsResponse;
    statusCode: number;
}
