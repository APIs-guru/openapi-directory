import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class MirrorTimelineAttachmentsDeletePathParams extends SpeakeasyBase {
    attachmentId: string;
    itemId: string;
}
export declare class MirrorTimelineAttachmentsDeleteQueryParams extends SpeakeasyBase {
    alt?: shared.AltEnum;
    fields?: string;
    key?: string;
    oauthToken?: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    userIp?: string;
}
export declare class MirrorTimelineAttachmentsDeleteSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class MirrorTimelineAttachmentsDeleteRequest extends SpeakeasyBase {
    pathParams: MirrorTimelineAttachmentsDeletePathParams;
    queryParams: MirrorTimelineAttachmentsDeleteQueryParams;
    security: MirrorTimelineAttachmentsDeleteSecurity;
}
export declare class MirrorTimelineAttachmentsDeleteResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
