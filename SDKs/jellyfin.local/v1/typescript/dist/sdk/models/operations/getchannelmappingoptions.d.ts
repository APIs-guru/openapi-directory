import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetChannelMappingOptionsQueryParams extends SpeakeasyBase {
    providerId?: string;
}
export declare class GetChannelMappingOptionsSecurity extends SpeakeasyBase {
    customAuthentication: shared.SchemeCustomAuthentication;
}
export declare class GetChannelMappingOptionsRequest extends SpeakeasyBase {
    queryParams: GetChannelMappingOptionsQueryParams;
    security: GetChannelMappingOptionsSecurity;
}
export declare class GetChannelMappingOptionsResponse extends SpeakeasyBase {
    channelMappingOptionsDto?: shared.ChannelMappingOptionsDto;
    contentType: string;
    statusCode: number;
}
