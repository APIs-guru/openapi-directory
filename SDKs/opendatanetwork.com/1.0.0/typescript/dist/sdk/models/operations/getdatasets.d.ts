import { SpeakeasyBase } from "../../../internal/utils";
export declare class GetDatasetsQueryParams extends SpeakeasyBase {
    appToken?: string;
    datasetId?: string;
    entityId?: string;
    limit?: number;
    offset?: number;
}
export declare class GetDatasetsHeaders extends SpeakeasyBase {
    xAppToken?: string;
}
export declare class GetDatasetsRequest extends SpeakeasyBase {
    queryParams: GetDatasetsQueryParams;
    headers: GetDatasetsHeaders;
}
export declare class GetDatasetsResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
