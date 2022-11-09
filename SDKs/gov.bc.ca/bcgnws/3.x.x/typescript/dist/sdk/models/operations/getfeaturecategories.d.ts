import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare enum GetFeatureCategoriesOutputFormatEnum {
    Json = "json",
    Xml = "xml"
}
export declare class GetFeatureCategoriesQueryParams extends SpeakeasyBase {
    outputFormat: GetFeatureCategoriesOutputFormatEnum;
}
export declare class GetFeatureCategoriesRequest extends SpeakeasyBase {
    queryParams: GetFeatureCategoriesQueryParams;
}
export declare class GetFeatureCategoriesResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
