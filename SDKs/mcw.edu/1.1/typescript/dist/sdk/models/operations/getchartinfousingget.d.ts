import { SpeakeasyBase } from "../../../internal/utils";
export declare class GetChartInfoUsingGetPathParams extends SpeakeasyBase {
    refRgdId: number;
    speciesTypeKey: number;
    termString: string;
}
export declare class GetChartInfoUsingGetRequest extends SpeakeasyBase {
    pathParams: GetChartInfoUsingGetPathParams;
}
export declare class GetChartInfoUsingGetResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
