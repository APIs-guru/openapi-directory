import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GetHlsAudioSegmentLegacyAacPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=itemId" })
  itemId: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=segmentId" })
  segmentId: string;
}


export class GetHlsAudioSegmentLegacyAacRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetHlsAudioSegmentLegacyAacPathParams;
}


export class GetHlsAudioSegmentLegacyAacResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  getHlsAudioSegmentLegacyAac200AudioWildcardBinaryString?: Uint8Array;

  @Metadata()
  statusCode: number;
}
