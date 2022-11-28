import { SpeakeasyBase } from "../../../internal/utils";
export declare class GetStudiesQueryParams extends SpeakeasyBase {
    expand?: string;
    full?: boolean;
    limit?: number;
    short?: boolean;
    since?: number;
}
export declare class GetStudiesRequest extends SpeakeasyBase {
    queryParams: GetStudiesQueryParams;
}
export declare class GetStudiesResponse extends SpeakeasyBase {
    contentType: string;
    getStudies200ApplicationJsonAny?: any;
    statusCode: number;
}
