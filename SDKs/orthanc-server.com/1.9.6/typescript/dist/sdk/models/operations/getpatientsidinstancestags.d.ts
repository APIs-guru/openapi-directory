import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare class GetPatientsIdInstancesTagsPathParams extends SpeakeasyBase {
    id: string;
}
export declare class GetPatientsIdInstancesTagsQueryParams extends SpeakeasyBase {
    ignoreLength?: string[];
    short?: boolean;
    simplify?: boolean;
}
export declare class GetPatientsIdInstancesTagsRequest extends SpeakeasyBase {
    pathParams: GetPatientsIdInstancesTagsPathParams;
    queryParams: GetPatientsIdInstancesTagsQueryParams;
}
export declare class GetPatientsIdInstancesTagsResponse extends SpeakeasyBase {
    contentType: string;
    getPatientsIdInstancesTags200ApplicationJsonAny?: any;
    statusCode: number;
}
