import { SpeakeasyBase } from "../../../internal/utils";
export declare class GetChromosomeByAssemblyUsingGetPathParams extends SpeakeasyBase {
    chromosome: string;
    mapKey: number;
}
export declare class GetChromosomeByAssemblyUsingGetRequest extends SpeakeasyBase {
    pathParams: GetChromosomeByAssemblyUsingGetPathParams;
}
export declare class GetChromosomeByAssemblyUsingGetResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
