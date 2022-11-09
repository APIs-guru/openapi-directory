import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare class GetAnnotationsUsingGetPathParams extends SpeakeasyBase {
    accId: string;
    includeChildren: boolean;
    speciesTypeKey: number;
}
export declare class GetAnnotationsUsingGetRequest extends SpeakeasyBase {
    pathParams: GetAnnotationsUsingGetPathParams;
}
export declare class GetAnnotationsUsingGetResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
