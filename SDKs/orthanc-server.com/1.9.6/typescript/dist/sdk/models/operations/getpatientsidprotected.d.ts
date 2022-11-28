import { SpeakeasyBase } from "../../../internal/utils";
export declare class GetPatientsIdProtectedPathParams extends SpeakeasyBase {
    id: string;
}
export declare class GetPatientsIdProtectedRequest extends SpeakeasyBase {
    pathParams: GetPatientsIdProtectedPathParams;
}
export declare class GetPatientsIdProtectedResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
