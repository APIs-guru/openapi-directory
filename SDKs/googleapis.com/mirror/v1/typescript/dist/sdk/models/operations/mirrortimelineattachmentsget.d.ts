import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class MirrorTimelineAttachmentsGetPathParams extends SpeakeasyBase {
    attachmentId: string;
    itemId: string;
}
export declare class MirrorTimelineAttachmentsGetQueryParams extends SpeakeasyBase {
    alt?: shared.AltEnum;
    fields?: string;
    key?: string;
    oauthToken?: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    userIp?: string;
}
export declare class MirrorTimelineAttachmentsGetSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class MirrorTimelineAttachmentsGetRequest extends SpeakeasyBase {
    pathParams: MirrorTimelineAttachmentsGetPathParams;
    queryParams: MirrorTimelineAttachmentsGetQueryParams;
    security: MirrorTimelineAttachmentsGetSecurity;
}
export declare class MirrorTimelineAttachmentsGetResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
