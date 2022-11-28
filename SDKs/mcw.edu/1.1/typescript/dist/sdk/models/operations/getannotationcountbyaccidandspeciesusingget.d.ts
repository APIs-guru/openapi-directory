import { SpeakeasyBase } from "../../../internal/utils";
export declare class GetAnnotationCountByAccIdAndSpeciesUsingGetPathParams extends SpeakeasyBase {
    accId: string;
    includeChildren: boolean;
    speciesTypeKey: number;
}
export declare class GetAnnotationCountByAccIdAndSpeciesUsingGetRequest extends SpeakeasyBase {
    pathParams: GetAnnotationCountByAccIdAndSpeciesUsingGetPathParams;
}
export declare class GetAnnotationCountByAccIdAndSpeciesUsingGetResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
