import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum MirrorTimelineListOrderByEnum {
    DisplayTime = "displayTime",
    WriteTime = "writeTime"
}
export declare class MirrorTimelineListQueryParams extends SpeakeasyBase {
    alt?: shared.AltEnum;
    bundleId?: string;
    fields?: string;
    includeDeleted?: boolean;
    key?: string;
    maxResults?: number;
    oauthToken?: string;
    orderBy?: MirrorTimelineListOrderByEnum;
    pageToken?: string;
    pinnedOnly?: boolean;
    prettyPrint?: boolean;
    quotaUser?: string;
    sourceItemId?: string;
    userIp?: string;
}
export declare class MirrorTimelineListSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class MirrorTimelineListSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class MirrorTimelineListSecurity extends SpeakeasyBase {
    option1?: MirrorTimelineListSecurityOption1;
    option2?: MirrorTimelineListSecurityOption2;
}
export declare class MirrorTimelineListRequest extends SpeakeasyBase {
    queryParams: MirrorTimelineListQueryParams;
    security: MirrorTimelineListSecurity;
}
export declare class MirrorTimelineListResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
