import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GetEnsemblProteinMappingUsingGetPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=rgdId" })
  rgdId: number;
}


export class GetEnsemblProteinMappingUsingGetRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetEnsemblProteinMappingUsingGetPathParams;
}


export class GetEnsemblProteinMappingUsingGetResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
