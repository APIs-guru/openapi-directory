import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetResourcesSourcesJsonQueryParams extends SpeakeasyBase {
    max?: number;
    offset?: number;
    sort?: string;
}
export declare class GetResourcesSourcesJsonRequest extends SpeakeasyBase {
    queryParams: GetResourcesSourcesJsonQueryParams;
}
export declare class GetResourcesSourcesJsonResponse extends SpeakeasyBase {
    contentType: string;
    sourceWrappeds?: shared.SourceWrapped[];
    statusCode: number;
}
