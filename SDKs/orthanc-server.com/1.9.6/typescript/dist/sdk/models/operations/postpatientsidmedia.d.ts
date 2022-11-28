import { SpeakeasyBase } from "../../../internal/utils";
export declare class PostPatientsIdMediaPathParams extends SpeakeasyBase {
    id: string;
}
export declare class PostPatientsIdMediaRequest extends SpeakeasyBase {
    pathParams: PostPatientsIdMediaPathParams;
    request?: any;
}
export declare class PostPatientsIdMediaResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    postPatientsIdMedia200ApplicationJsonAny?: any;
    statusCode: number;
}
