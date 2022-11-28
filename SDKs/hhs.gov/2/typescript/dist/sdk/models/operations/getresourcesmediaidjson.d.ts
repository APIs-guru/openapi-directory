import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetResourcesMediaIdJsonPathParams extends SpeakeasyBase {
    id: number;
}
export declare class GetResourcesMediaIdJsonRequest extends SpeakeasyBase {
    pathParams: GetResourcesMediaIdJsonPathParams;
}
export declare class GetResourcesMediaIdJsonResponse extends SpeakeasyBase {
    contentType: string;
    mediaItemWrappeds?: shared.MediaItemWrapped[];
    statusCode: number;
}
