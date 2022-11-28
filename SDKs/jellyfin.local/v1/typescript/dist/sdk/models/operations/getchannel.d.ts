import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetChannelPathParams extends SpeakeasyBase {
    channelId: string;
}
export declare class GetChannelQueryParams extends SpeakeasyBase {
    userId?: string;
}
export declare class GetChannelSecurity extends SpeakeasyBase {
    customAuthentication: shared.SchemeCustomAuthentication;
}
export declare class GetChannelRequest extends SpeakeasyBase {
    pathParams: GetChannelPathParams;
    queryParams: GetChannelQueryParams;
    security: GetChannelSecurity;
}
export declare class GetChannelResponse extends SpeakeasyBase {
    baseItemDto?: shared.BaseItemDto;
    contentType: string;
    statusCode: number;
}
