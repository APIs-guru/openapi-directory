import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetRemoteImageProvidersPathParams extends SpeakeasyBase {
    itemId: string;
}
export declare class GetRemoteImageProvidersSecurity extends SpeakeasyBase {
    customAuthentication: shared.SchemeCustomAuthentication;
}
export declare class GetRemoteImageProvidersRequest extends SpeakeasyBase {
    pathParams: GetRemoteImageProvidersPathParams;
    security: GetRemoteImageProvidersSecurity;
}
export declare class GetRemoteImageProvidersResponse extends SpeakeasyBase {
    contentType: string;
    imageProviderInfos?: shared.ImageProviderInfo[];
    problemDetails?: Map<string, any>;
    statusCode: number;
}
