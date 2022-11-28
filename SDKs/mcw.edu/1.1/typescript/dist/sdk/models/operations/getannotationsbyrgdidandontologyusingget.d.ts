import { SpeakeasyBase } from "../../../internal/utils";
export declare class GetAnnotationsByRgdIdAndOntologyUsingGetPathParams extends SpeakeasyBase {
    ontologyPrefix: string;
    rgdId: number;
}
export declare class GetAnnotationsByRgdIdAndOntologyUsingGetRequest extends SpeakeasyBase {
    pathParams: GetAnnotationsByRgdIdAndOntologyUsingGetPathParams;
}
export declare class GetAnnotationsByRgdIdAndOntologyUsingGetResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
