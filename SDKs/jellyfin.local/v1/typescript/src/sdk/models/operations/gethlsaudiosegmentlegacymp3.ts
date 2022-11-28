import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GetHlsAudioSegmentLegacyMp3PathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=itemId" })
  itemId: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=segmentId" })
  segmentId: string;
}


export class GetHlsAudioSegmentLegacyMp3Request extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetHlsAudioSegmentLegacyMp3PathParams;
}


export class GetHlsAudioSegmentLegacyMp3Response extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  getHlsAudioSegmentLegacyMp3200AudioWildcardBinaryString?: Uint8Array;

  @SpeakeasyMetadata()
  statusCode: number;
}
