import { SpeakeasyBase } from "../../../internal/utils";
export declare class GetAnnotationsByAccIdAndRgdIdUsingGetPathParams extends SpeakeasyBase {
    accId: string;
    rgdId: number;
}
export declare class GetAnnotationsByAccIdAndRgdIdUsingGetRequest extends SpeakeasyBase {
    pathParams: GetAnnotationsByAccIdAndRgdIdUsingGetPathParams;
}
export declare class GetAnnotationsByAccIdAndRgdIdUsingGetResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
