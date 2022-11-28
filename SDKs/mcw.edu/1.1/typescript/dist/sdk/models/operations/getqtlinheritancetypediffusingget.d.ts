import { SpeakeasyBase } from "../../../internal/utils";
export declare class GetQtlInheritanceTypeDiffUsingGetPathParams extends SpeakeasyBase {
    dateFromYyyymmdd: string;
    dateToYyyymmdd: string;
    speciesTypeKey: number;
}
export declare class GetQtlInheritanceTypeDiffUsingGetRequest extends SpeakeasyBase {
    pathParams: GetQtlInheritanceTypeDiffUsingGetPathParams;
}
export declare class GetQtlInheritanceTypeDiffUsingGetResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
