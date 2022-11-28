import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DisplayvideoFloodlightGroupsGetPathParams extends SpeakeasyBase {
    floodlightGroupId: string;
}
export declare class DisplayvideoFloodlightGroupsGetQueryParams extends SpeakeasyBase {
    dollarXgafv?: shared.XgafvEnum;
    accessToken?: string;
    alt?: shared.AltEnum;
    callback?: string;
    fields?: string;
    key?: string;
    oauthToken?: string;
    partnerId?: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    uploadType?: string;
    uploadProtocol?: string;
}
export declare class DisplayvideoFloodlightGroupsGetSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DisplayvideoFloodlightGroupsGetRequest extends SpeakeasyBase {
    pathParams: DisplayvideoFloodlightGroupsGetPathParams;
    queryParams: DisplayvideoFloodlightGroupsGetQueryParams;
    security: DisplayvideoFloodlightGroupsGetSecurity;
}
export declare class DisplayvideoFloodlightGroupsGetResponse extends SpeakeasyBase {
    contentType: string;
    floodlightGroup?: shared.FloodlightGroup;
    statusCode: number;
}
