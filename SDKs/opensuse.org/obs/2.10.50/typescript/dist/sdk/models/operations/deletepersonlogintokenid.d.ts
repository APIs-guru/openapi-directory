import { SpeakeasyBase } from "../../../internal/utils";
export declare class DeletePersonLoginTokenIdPathParams extends SpeakeasyBase {
    id: string;
    login: string;
}
export declare class DeletePersonLoginTokenIdRequest extends SpeakeasyBase {
    pathParams: DeletePersonLoginTokenIdPathParams;
}
export declare class DeletePersonLoginTokenIdResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
