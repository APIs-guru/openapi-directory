import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare class GetStudiesIdPathParams extends SpeakeasyBase {
    id: string;
}
export declare class GetStudiesIdQueryParams extends SpeakeasyBase {
    full?: boolean;
    short?: boolean;
}
export declare class GetStudiesIdRequest extends SpeakeasyBase {
    pathParams: GetStudiesIdPathParams;
    queryParams: GetStudiesIdQueryParams;
}
export declare class GetStudiesIdResponse extends SpeakeasyBase {
    contentType: string;
    getStudiesId200ApplicationJsonAny?: any;
    statusCode: number;
}
