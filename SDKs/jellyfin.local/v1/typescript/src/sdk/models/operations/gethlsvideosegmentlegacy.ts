import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GetHlsVideoSegmentLegacyPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=itemId" })
  itemId: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=playlistId" })
  playlistId: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=segmentContainer" })
  segmentContainer: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=segmentId" })
  segmentId: string;
}


export class GetHlsVideoSegmentLegacyRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetHlsVideoSegmentLegacyPathParams;
}


export class GetHlsVideoSegmentLegacyResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  getHlsVideoSegmentLegacy200VideoWildcardBinaryString?: Uint8Array;

  @Metadata()
  problemDetails?: Map<string, any>;

  @Metadata()
  statusCode: number;
}
