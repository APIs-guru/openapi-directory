import { SpeakeasyBase } from "../../../internal/utils";
export declare enum GetFeatureClassesOutputFormatEnum {
    Json = "json",
    Xml = "xml"
}
export declare class GetFeatureClassesQueryParams extends SpeakeasyBase {
    outputFormat: GetFeatureClassesOutputFormatEnum;
}
export declare class GetFeatureClassesRequest extends SpeakeasyBase {
    queryParams: GetFeatureClassesQueryParams;
}
export declare class GetFeatureClassesResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
