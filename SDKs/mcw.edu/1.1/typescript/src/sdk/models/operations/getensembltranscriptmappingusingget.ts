import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GetEnsemblTranscriptMappingUsingGetPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=rgdId" })
  rgdId: number;
}


export class GetEnsemblTranscriptMappingUsingGetRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetEnsemblTranscriptMappingUsingGetPathParams;
}


export class GetEnsemblTranscriptMappingUsingGetResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
