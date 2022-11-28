import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class MirrorTimelineAttachmentsListPathParams extends SpeakeasyBase {
    itemId: string;
}
export declare class MirrorTimelineAttachmentsListQueryParams extends SpeakeasyBase {
    alt?: shared.AltEnum;
    fields?: string;
    key?: string;
    oauthToken?: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    userIp?: string;
}
export declare class MirrorTimelineAttachmentsListSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class MirrorTimelineAttachmentsListRequest extends SpeakeasyBase {
    pathParams: MirrorTimelineAttachmentsListPathParams;
    queryParams: MirrorTimelineAttachmentsListQueryParams;
    security: MirrorTimelineAttachmentsListSecurity;
}
export declare class MirrorTimelineAttachmentsListResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
