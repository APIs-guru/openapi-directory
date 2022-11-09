import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare class GetGenesBySpeciesUsingGetPathParams extends SpeakeasyBase {
    speciesTypeKey: number;
}
export declare class GetGenesBySpeciesUsingGetRequest extends SpeakeasyBase {
    pathParams: GetGenesBySpeciesUsingGetPathParams;
}
export declare class GetGenesBySpeciesUsingGetResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
