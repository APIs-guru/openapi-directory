import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GetHlsAudioSegmentLegacyMp3PathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=itemId" })
  itemId: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=segmentId" })
  segmentId: string;
}


export class GetHlsAudioSegmentLegacyMp3Request extends SpeakeasyBase {
  @Metadata()
  pathParams: GetHlsAudioSegmentLegacyMp3PathParams;
}


export class GetHlsAudioSegmentLegacyMp3Response extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  getHlsAudioSegmentLegacyMp3200AudioWildcardBinaryString?: Uint8Array;

  @Metadata()
  statusCode: number;
}
