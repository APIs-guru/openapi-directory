import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PostFullCapabilitiesQueryParams extends SpeakeasyBase {
    id?: string;
}
export declare class PostFullCapabilitiesRequests extends SpeakeasyBase {
    clientCapabilitiesDto?: shared.ClientCapabilitiesDto;
    clientCapabilitiesDto1?: shared.ClientCapabilitiesDto;
    clientCapabilitiesDto2?: shared.ClientCapabilitiesDto;
}
export declare class PostFullCapabilitiesSecurity extends SpeakeasyBase {
    customAuthentication: shared.SchemeCustomAuthentication;
}
export declare class PostFullCapabilitiesRequest extends SpeakeasyBase {
    queryParams: PostFullCapabilitiesQueryParams;
    request: PostFullCapabilitiesRequests;
    security: PostFullCapabilitiesSecurity;
}
export declare class PostFullCapabilitiesResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
