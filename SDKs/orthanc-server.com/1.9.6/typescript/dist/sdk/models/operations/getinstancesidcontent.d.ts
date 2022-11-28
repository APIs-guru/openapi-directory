import { SpeakeasyBase } from "../../../internal/utils";
export declare class GetInstancesIdContentPathParams extends SpeakeasyBase {
    id: string;
}
export declare class GetInstancesIdContentQueryParams extends SpeakeasyBase {
    dot: string;
}
export declare class GetInstancesIdContentRequest extends SpeakeasyBase {
    pathParams: GetInstancesIdContentPathParams;
    queryParams: GetInstancesIdContentQueryParams;
}
export declare class GetInstancesIdContentResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
