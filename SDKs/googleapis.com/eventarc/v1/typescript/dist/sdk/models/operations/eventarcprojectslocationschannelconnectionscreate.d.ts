import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class EventarcProjectsLocationsChannelConnectionsCreatePathParams extends SpeakeasyBase {
    parent: string;
}
export declare class EventarcProjectsLocationsChannelConnectionsCreateQueryParams extends SpeakeasyBase {
    dollarXgafv?: shared.XgafvEnum;
    accessToken?: string;
    alt?: shared.AltEnum;
    callback?: string;
    channelConnectionId?: string;
    fields?: string;
    key?: string;
    oauthToken?: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    uploadType?: string;
    uploadProtocol?: string;
}
export declare class EventarcProjectsLocationsChannelConnectionsCreateSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class EventarcProjectsLocationsChannelConnectionsCreateRequest extends SpeakeasyBase {
    pathParams: EventarcProjectsLocationsChannelConnectionsCreatePathParams;
    queryParams: EventarcProjectsLocationsChannelConnectionsCreateQueryParams;
    request?: shared.ChannelConnection;
    security: EventarcProjectsLocationsChannelConnectionsCreateSecurity;
}
export declare class EventarcProjectsLocationsChannelConnectionsCreateResponse extends SpeakeasyBase {
    contentType: string;
    googleLongrunningOperation?: shared.GoogleLongrunningOperation;
    statusCode: number;
}
