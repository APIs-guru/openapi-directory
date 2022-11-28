import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GetHlsVideoSegmentLegacyPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=itemId" })
  itemId: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=playlistId" })
  playlistId: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=segmentContainer" })
  segmentContainer: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=segmentId" })
  segmentId: string;
}


export class GetHlsVideoSegmentLegacyRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetHlsVideoSegmentLegacyPathParams;
}


export class GetHlsVideoSegmentLegacyResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  getHlsVideoSegmentLegacy200VideoWildcardBinaryString?: Uint8Array;

  @SpeakeasyMetadata()
  problemDetails?: Map<string, any>;

  @SpeakeasyMetadata()
  statusCode: number;
}
