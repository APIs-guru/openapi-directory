import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetResourcesSourcesIdJsonPathParams extends SpeakeasyBase {
    id: number;
}
export declare class GetResourcesSourcesIdJsonRequest extends SpeakeasyBase {
    pathParams: GetResourcesSourcesIdJsonPathParams;
}
export declare class GetResourcesSourcesIdJsonResponse extends SpeakeasyBase {
    contentType: string;
    sourceWrappeds?: shared.SourceWrapped[];
    statusCode: number;
}
