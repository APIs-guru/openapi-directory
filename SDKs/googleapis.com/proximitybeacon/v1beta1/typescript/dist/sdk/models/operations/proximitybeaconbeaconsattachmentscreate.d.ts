import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class ProximitybeaconBeaconsAttachmentsCreatePathParams extends SpeakeasyBase {
    beaconName: string;
}
export declare class ProximitybeaconBeaconsAttachmentsCreateQueryParams extends SpeakeasyBase {
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
export declare class ProximitybeaconBeaconsAttachmentsCreateSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class ProximitybeaconBeaconsAttachmentsCreateRequest extends SpeakeasyBase {
    pathParams: ProximitybeaconBeaconsAttachmentsCreatePathParams;
    queryParams: ProximitybeaconBeaconsAttachmentsCreateQueryParams;
    request?: shared.BeaconAttachment;
    security: ProximitybeaconBeaconsAttachmentsCreateSecurity;
}
export declare class ProximitybeaconBeaconsAttachmentsCreateResponse extends SpeakeasyBase {
    beaconAttachment?: shared.BeaconAttachment;
    contentType: string;
    statusCode: number;
}
