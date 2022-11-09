import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare class GetAnnotationCountByAccIdUsingGetPathParams extends SpeakeasyBase {
    accId: string;
    includeChildren: boolean;
}
export declare class GetAnnotationCountByAccIdUsingGetRequest extends SpeakeasyBase {
    pathParams: GetAnnotationCountByAccIdUsingGetPathParams;
}
export declare class GetAnnotationCountByAccIdUsingGetResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
