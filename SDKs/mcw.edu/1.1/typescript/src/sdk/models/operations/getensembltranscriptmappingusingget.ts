import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GetEnsemblTranscriptMappingUsingGetPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=rgdId" })
  rgdId: number;
}


export class GetEnsemblTranscriptMappingUsingGetRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetEnsemblTranscriptMappingUsingGetPathParams;
}


export class GetEnsemblTranscriptMappingUsingGetResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
