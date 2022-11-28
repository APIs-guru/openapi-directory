import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class SetChannelMappingRequests extends SpeakeasyBase {
    setChannelMappingDto?: shared.SetChannelMappingDto;
    setChannelMappingDto1?: shared.SetChannelMappingDto;
    setChannelMappingDto2?: shared.SetChannelMappingDto;
}
export declare class SetChannelMappingSecurity extends SpeakeasyBase {
    customAuthentication: shared.SchemeCustomAuthentication;
}
export declare class SetChannelMappingRequest extends SpeakeasyBase {
    request: SetChannelMappingRequests;
    security: SetChannelMappingSecurity;
}
export declare class SetChannelMappingResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    tunerChannelMapping?: shared.TunerChannelMapping;
}
