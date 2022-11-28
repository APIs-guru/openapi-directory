import { SpeakeasyBase } from "../../../internal/utils";
export declare class GetGeneAllelesUsingGetPathParams extends SpeakeasyBase {
    rgdId: number;
}
export declare class GetGeneAllelesUsingGetRequest extends SpeakeasyBase {
    pathParams: GetGeneAllelesUsingGetPathParams;
}
export declare class GetGeneAllelesUsingGetResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
