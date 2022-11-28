import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class MirrorTimelineAttachmentsInsertPathParams extends SpeakeasyBase {
    itemId: string;
}
export declare class MirrorTimelineAttachmentsInsertQueryParams extends SpeakeasyBase {
    alt?: shared.AltEnum;
    fields?: string;
    key?: string;
    oauthToken?: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    userIp?: string;
}
export declare class MirrorTimelineAttachmentsInsertSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class MirrorTimelineAttachmentsInsertRequest extends SpeakeasyBase {
    pathParams: MirrorTimelineAttachmentsInsertPathParams;
    queryParams: MirrorTimelineAttachmentsInsertQueryParams;
    security: MirrorTimelineAttachmentsInsertSecurity;
}
export declare class MirrorTimelineAttachmentsInsertResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
