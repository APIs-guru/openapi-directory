import { SpeakeasyBase } from "../../../internal/utils";
export declare class DeleteSetupV1LocationsIdDeleteallimagesPathParams extends SpeakeasyBase {
    id: string;
}
export declare class DeleteSetupV1LocationsIdDeleteallimagesQueryParams extends SpeakeasyBase {
    uppercase?: boolean;
}
export declare class DeleteSetupV1LocationsIdDeleteallimagesRequest extends SpeakeasyBase {
    pathParams: DeleteSetupV1LocationsIdDeleteallimagesPathParams;
    queryParams: DeleteSetupV1LocationsIdDeleteallimagesQueryParams;
}
export declare class DeleteSetupV1LocationsIdDeleteallimagesResponse extends SpeakeasyBase {
    contentType: string;
    deleteSetupV1LocationsIdDeleteallimages200ApplicationJsonBoolean?: boolean;
    statusCode: number;
}
