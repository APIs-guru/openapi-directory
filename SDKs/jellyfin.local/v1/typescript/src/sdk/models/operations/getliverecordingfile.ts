import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GetLiveRecordingFilePathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=recordingId" })
  recordingId: string;
}


export class GetLiveRecordingFileRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetLiveRecordingFilePathParams;
}


export class GetLiveRecordingFileResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  getLiveRecordingFile200VideoWildcardBinaryString?: Uint8Array;

  @Metadata()
  problemDetails?: Map<string, any>;

  @Metadata()
  statusCode: number;
}
