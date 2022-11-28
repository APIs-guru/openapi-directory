import { SpeakeasyBase } from "../../../internal/utils";
export declare class DeleteLegPathParams extends SpeakeasyBase {
    legId: string;
}
export declare class DeleteLegRequest extends SpeakeasyBase {
    pathParams: DeleteLegPathParams;
}
export declare class DeleteLegResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    deleteLeg200ApplicationJsonObject?: Map<string, any>;
}
