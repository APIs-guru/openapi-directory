import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare class GetMapsUsingGetPathParams extends SpeakeasyBase {
    speciesTypeKey: number;
}
export declare class GetMapsUsingGetRequest extends SpeakeasyBase {
    pathParams: GetMapsUsingGetPathParams;
}
export declare class GetMapsUsingGetResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
