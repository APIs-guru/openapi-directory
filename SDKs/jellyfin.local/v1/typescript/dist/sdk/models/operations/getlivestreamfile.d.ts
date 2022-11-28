import { SpeakeasyBase } from "../../../internal/utils";
export declare class GetLiveStreamFilePathParams extends SpeakeasyBase {
    container: string;
    streamId: string;
}
export declare class GetLiveStreamFileRequest extends SpeakeasyBase {
    pathParams: GetLiveStreamFilePathParams;
}
export declare class GetLiveStreamFileResponse extends SpeakeasyBase {
    contentType: string;
    getLiveStreamFile200VideoWildcardBinaryString?: Uint8Array;
    problemDetails?: Map<string, any>;
    statusCode: number;
}
