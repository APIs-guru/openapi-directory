import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DisplayvideoCustomListsGetPathParams extends SpeakeasyBase {
    customListId: string;
}
export declare class DisplayvideoCustomListsGetQueryParams extends SpeakeasyBase {
    dollarXgafv?: shared.XgafvEnum;
    accessToken?: string;
    advertiserId?: string;
    alt?: shared.AltEnum;
    callback?: string;
    fields?: string;
    key?: string;
    oauthToken?: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    uploadType?: string;
    uploadProtocol?: string;
}
export declare class DisplayvideoCustomListsGetSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DisplayvideoCustomListsGetRequest extends SpeakeasyBase {
    pathParams: DisplayvideoCustomListsGetPathParams;
    queryParams: DisplayvideoCustomListsGetQueryParams;
    security: DisplayvideoCustomListsGetSecurity;
}
export declare class DisplayvideoCustomListsGetResponse extends SpeakeasyBase {
    contentType: string;
    customList?: shared.CustomList;
    statusCode: number;
}
