import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PostCapabilitiesQueryParams extends SpeakeasyBase {
    id?: string;
    playableMediaTypes?: string[];
    supportedCommands?: shared.GeneralCommandTypeEnum[];
    supportsMediaControl?: boolean;
    supportsPersistentIdentifier?: boolean;
    supportsSync?: boolean;
}
export declare class PostCapabilitiesSecurity extends SpeakeasyBase {
    customAuthentication: shared.SchemeCustomAuthentication;
}
export declare class PostCapabilitiesRequest extends SpeakeasyBase {
    queryParams: PostCapabilitiesQueryParams;
    security: PostCapabilitiesSecurity;
}
export declare class PostCapabilitiesResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
