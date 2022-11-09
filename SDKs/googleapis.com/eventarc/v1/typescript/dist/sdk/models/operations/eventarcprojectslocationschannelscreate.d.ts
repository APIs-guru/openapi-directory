import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class EventarcProjectsLocationsChannelsCreatePathParams extends SpeakeasyBase {
    parent: string;
}
export declare class EventarcProjectsLocationsChannelsCreateQueryParams extends SpeakeasyBase {
    dollarXgafv?: shared.XgafvEnum;
    accessToken?: string;
    alt?: shared.AltEnum;
    callback?: string;
    channelId?: string;
    fields?: string;
    key?: string;
    oauthToken?: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    uploadType?: string;
    uploadProtocol?: string;
    validateOnly?: boolean;
}
export declare class EventarcProjectsLocationsChannelsCreateSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class EventarcProjectsLocationsChannelsCreateRequest extends SpeakeasyBase {
    pathParams: EventarcProjectsLocationsChannelsCreatePathParams;
    queryParams: EventarcProjectsLocationsChannelsCreateQueryParams;
    request?: shared.Channel;
    security: EventarcProjectsLocationsChannelsCreateSecurity;
}
export declare class EventarcProjectsLocationsChannelsCreateResponse extends SpeakeasyBase {
    contentType: string;
    googleLongrunningOperation?: shared.GoogleLongrunningOperation;
    statusCode: number;
}
