import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetImagesQueryParams extends SpeakeasyBase {
    page?: number;
    pageSize?: number;
}
export declare class GetImages200ApplicationJson extends SpeakeasyBase {
    data?: shared.ImagePublic[];
    page?: number;
    pages?: number;
    results?: number;
}
export declare class GetImagesDefaultApplicationJson extends SpeakeasyBase {
    errors?: shared.ErrorObject[];
}
export declare class GetImagesRequest extends SpeakeasyBase {
    queryParams: GetImagesQueryParams;
}
export declare class GetImagesResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    getImages200ApplicationJsonObject?: GetImages200ApplicationJson;
    getImagesDefaultApplicationJsonObject?: GetImagesDefaultApplicationJson;
}
