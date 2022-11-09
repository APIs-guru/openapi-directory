import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare class GetStudiesIdMetadataPathParams extends SpeakeasyBase {
    id: string;
}
export declare class GetStudiesIdMetadataQueryParams extends SpeakeasyBase {
    expand?: string;
}
export declare class GetStudiesIdMetadataRequest extends SpeakeasyBase {
    pathParams: GetStudiesIdMetadataPathParams;
    queryParams: GetStudiesIdMetadataQueryParams;
}
export declare class GetStudiesIdMetadataResponse extends SpeakeasyBase {
    contentType: string;
    getStudiesIdMetadata200ApplicationJsonAny?: any;
    statusCode: number;
}
