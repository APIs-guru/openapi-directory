import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class ProximitybeaconBeaconsAttachmentsBatchDeletePathParams extends SpeakeasyBase {
    beaconName: string;
}
export declare class ProximitybeaconBeaconsAttachmentsBatchDeleteQueryParams extends SpeakeasyBase {
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
export declare class ProximitybeaconBeaconsAttachmentsBatchDeleteSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class ProximitybeaconBeaconsAttachmentsBatchDeleteRequest extends SpeakeasyBase {
    pathParams: ProximitybeaconBeaconsAttachmentsBatchDeletePathParams;
    queryParams: ProximitybeaconBeaconsAttachmentsBatchDeleteQueryParams;
    security: ProximitybeaconBeaconsAttachmentsBatchDeleteSecurity;
}
export declare class ProximitybeaconBeaconsAttachmentsBatchDeleteResponse extends SpeakeasyBase {
    contentType: string;
    deleteAttachmentsResponse?: shared.DeleteAttachmentsResponse;
    statusCode: number;
}
