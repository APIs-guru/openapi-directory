import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GetEnsemblGeneMappingUsingGetPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=rgdId" })
  rgdId: number;
}


export class GetEnsemblGeneMappingUsingGetRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetEnsemblGeneMappingUsingGetPathParams;
}


export class GetEnsemblGeneMappingUsingGetResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
