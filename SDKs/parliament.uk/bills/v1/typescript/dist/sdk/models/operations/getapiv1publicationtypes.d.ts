import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetApiV1PublicationTypesQueryParams extends SpeakeasyBase {
    skip?: number;
    take?: number;
}
export declare class GetApiV1PublicationTypesRequest extends SpeakeasyBase {
    queryParams: GetApiV1PublicationTypesQueryParams;
}
export declare class GetApiV1PublicationTypesResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    problemDetails?: Map<string, any>;
    publicationTypeSearchResult?: shared.PublicationTypeSearchResult;
    statusCode: number;
}
