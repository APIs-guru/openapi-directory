import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GetHlsAudioSegmentLegacyAacPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=itemId" })
  itemId: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=segmentId" })
  segmentId: string;
}


export class GetHlsAudioSegmentLegacyAacRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetHlsAudioSegmentLegacyAacPathParams;
}


export class GetHlsAudioSegmentLegacyAacResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  getHlsAudioSegmentLegacyAac200AudioWildcardBinaryString?: Uint8Array;

  @SpeakeasyMetadata()
  statusCode: number;
}
