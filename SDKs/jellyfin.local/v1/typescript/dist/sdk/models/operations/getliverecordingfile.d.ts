import { SpeakeasyBase } from "../../../internal/utils";
export declare class GetLiveRecordingFilePathParams extends SpeakeasyBase {
    recordingId: string;
}
export declare class GetLiveRecordingFileRequest extends SpeakeasyBase {
    pathParams: GetLiveRecordingFilePathParams;
}
export declare class GetLiveRecordingFileResponse extends SpeakeasyBase {
    contentType: string;
    getLiveRecordingFile200VideoWildcardBinaryString?: Uint8Array;
    problemDetails?: Map<string, any>;
    statusCode: number;
}
