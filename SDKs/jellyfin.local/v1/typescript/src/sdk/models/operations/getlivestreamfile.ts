import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GetLiveStreamFilePathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=container" })
  container: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=streamId" })
  streamId: string;
}


export class GetLiveStreamFileRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetLiveStreamFilePathParams;
}


export class GetLiveStreamFileResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  getLiveStreamFile200VideoWildcardBinaryString?: Uint8Array;

  @SpeakeasyMetadata()
  problemDetails?: Map<string, any>;

  @SpeakeasyMetadata()
  statusCode: number;
}
