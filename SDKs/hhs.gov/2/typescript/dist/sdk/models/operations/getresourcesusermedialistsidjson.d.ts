import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetResourcesUserMediaListsIdJsonPathParams extends SpeakeasyBase {
    id: number;
}
export declare class GetResourcesUserMediaListsIdJsonQueryParams extends SpeakeasyBase {
    displayMethod?: string;
}
export declare class GetResourcesUserMediaListsIdJsonRequest extends SpeakeasyBase {
    pathParams: GetResourcesUserMediaListsIdJsonPathParams;
    queryParams: GetResourcesUserMediaListsIdJsonQueryParams;
}
export declare class GetResourcesUserMediaListsIdJsonResponse extends SpeakeasyBase {
    contentType: string;
    mediaItemWrappeds?: shared.MediaItemWrapped[];
    statusCode: number;
}
