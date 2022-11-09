import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GetLiveStreamFilePathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=container" })
  container: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=streamId" })
  streamId: string;
}


export class GetLiveStreamFileRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetLiveStreamFilePathParams;
}


export class GetLiveStreamFileResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  getLiveStreamFile200VideoWildcardBinaryString?: Uint8Array;

  @Metadata()
  problemDetails?: Map<string, any>;

  @Metadata()
  statusCode: number;
}
