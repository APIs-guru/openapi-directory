import { SpeakeasyBase } from "../../../internal/utils";
export declare class GetGenesByAffyIdUsingGetPathParams extends SpeakeasyBase {
    affyId: string;
    speciesTypeKey: number;
}
export declare class GetGenesByAffyIdUsingGetRequest extends SpeakeasyBase {
    pathParams: GetGenesByAffyIdUsingGetPathParams;
}
export declare class GetGenesByAffyIdUsingGetResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
