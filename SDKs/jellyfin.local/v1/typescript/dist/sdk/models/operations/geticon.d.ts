import { SpeakeasyBase } from "../../../internal/utils";
export declare class GetIconPathParams extends SpeakeasyBase {
    fileName: string;
}
export declare class GetIconRequest extends SpeakeasyBase {
    pathParams: GetIconPathParams;
}
export declare class GetIconResponse extends SpeakeasyBase {
    contentType: string;
    getIcon200ImageWildcardBinaryString?: Uint8Array;
    problemDetails?: Map<string, any>;
    statusCode: number;
}
