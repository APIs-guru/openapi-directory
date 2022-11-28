import { SpeakeasyBase } from "../../../internal/utils";
export declare class PostInstancesRequests extends SpeakeasyBase {
    applicationDicom: Uint8Array;
    applicationZip: Uint8Array;
}
export declare class PostInstancesRequest extends SpeakeasyBase {
    request?: PostInstancesRequests;
}
export declare class PostInstancesResponse extends SpeakeasyBase {
    contentType: string;
    postInstances200ApplicationJsonAny?: any;
    statusCode: number;
}
