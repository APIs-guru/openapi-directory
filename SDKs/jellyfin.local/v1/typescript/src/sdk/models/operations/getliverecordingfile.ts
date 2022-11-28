import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GetLiveRecordingFilePathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=recordingId" })
  recordingId: string;
}


export class GetLiveRecordingFileRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetLiveRecordingFilePathParams;
}


export class GetLiveRecordingFileResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  getLiveRecordingFile200VideoWildcardBinaryString?: Uint8Array;

  @SpeakeasyMetadata()
  problemDetails?: Map<string, any>;

  @SpeakeasyMetadata()
  statusCode: number;
}
