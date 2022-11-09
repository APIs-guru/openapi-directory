import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare enum GetFeatureTypesOutputFormatEnum {
    Json = "json",
    Xml = "xml"
}
export declare class GetFeatureTypesQueryParams extends SpeakeasyBase {
    outputFormat: GetFeatureTypesOutputFormatEnum;
}
export declare class GetFeatureTypesRequest extends SpeakeasyBase {
    queryParams: GetFeatureTypesQueryParams;
}
export declare class GetFeatureTypesResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
