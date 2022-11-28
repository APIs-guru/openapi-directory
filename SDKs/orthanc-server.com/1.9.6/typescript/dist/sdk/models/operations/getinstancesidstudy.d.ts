import { SpeakeasyBase } from "../../../internal/utils";
export declare class GetInstancesIdStudyPathParams extends SpeakeasyBase {
    id: string;
}
export declare class GetInstancesIdStudyQueryParams extends SpeakeasyBase {
    full?: boolean;
    short?: boolean;
}
export declare class GetInstancesIdStudyRequest extends SpeakeasyBase {
    pathParams: GetInstancesIdStudyPathParams;
    queryParams: GetInstancesIdStudyQueryParams;
}
export declare class GetInstancesIdStudyResponse extends SpeakeasyBase {
    contentType: string;
    getInstancesIdStudy200ApplicationJsonAny?: any;
    statusCode: number;
}
