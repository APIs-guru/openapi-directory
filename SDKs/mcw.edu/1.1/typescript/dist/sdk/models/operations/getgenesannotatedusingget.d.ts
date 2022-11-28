import { SpeakeasyBase } from "../../../internal/utils";
export declare class GetGenesAnnotatedUsingGetPathParams extends SpeakeasyBase {
    accId: string;
    speciesTypeKey: number;
}
export declare class GetGenesAnnotatedUsingGetRequest extends SpeakeasyBase {
    pathParams: GetGenesAnnotatedUsingGetPathParams;
}
export declare class GetGenesAnnotatedUsingGetResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
