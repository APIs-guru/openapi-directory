import { SpeakeasyBase } from "../../../internal/utils";
export declare class LandlordControllerGetDocumentPathParams extends SpeakeasyBase {
    shortName: string;
}
export declare class LandlordControllerGetDocumentQueryParams extends SpeakeasyBase {
    id: string;
    token: string;
}
export declare class LandlordControllerGetDocumentRequest extends SpeakeasyBase {
    pathParams: LandlordControllerGetDocumentPathParams;
    queryParams: LandlordControllerGetDocumentQueryParams;
}
export declare class LandlordControllerGetDocumentResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    object?: Map<string, any>;
    statusCode: number;
}
