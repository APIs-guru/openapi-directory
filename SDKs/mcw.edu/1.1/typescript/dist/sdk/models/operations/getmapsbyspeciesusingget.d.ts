import { SpeakeasyBase } from "../../../internal/utils";
export declare class GetMapsBySpeciesUsingGetPathParams extends SpeakeasyBase {
    speciesTypeKey: number;
}
export declare class GetMapsBySpeciesUsingGetRequest extends SpeakeasyBase {
    pathParams: GetMapsBySpeciesUsingGetPathParams;
}
export declare class GetMapsBySpeciesUsingGetResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
