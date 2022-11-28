import { SpeakeasyBase } from "../../../internal/utils";
export declare class GetInstancesIdMetadataPathParams extends SpeakeasyBase {
    id: string;
}
export declare class GetInstancesIdMetadataQueryParams extends SpeakeasyBase {
    expand?: string;
}
export declare class GetInstancesIdMetadataRequest extends SpeakeasyBase {
    pathParams: GetInstancesIdMetadataPathParams;
    queryParams: GetInstancesIdMetadataQueryParams;
}
export declare class GetInstancesIdMetadataResponse extends SpeakeasyBase {
    contentType: string;
    getInstancesIdMetadata200ApplicationJsonAny?: any;
    statusCode: number;
}
