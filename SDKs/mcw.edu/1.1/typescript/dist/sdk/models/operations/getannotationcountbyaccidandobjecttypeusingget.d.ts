import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare class GetAnnotationCountByAccIdAndObjectTypeUsingGetPathParams extends SpeakeasyBase {
    accId: string;
    includeChildren: boolean;
    objectType: number;
    speciesTypeKey: number;
}
export declare class GetAnnotationCountByAccIdAndObjectTypeUsingGetRequest extends SpeakeasyBase {
    pathParams: GetAnnotationCountByAccIdAndObjectTypeUsingGetPathParams;
}
export declare class GetAnnotationCountByAccIdAndObjectTypeUsingGetResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
