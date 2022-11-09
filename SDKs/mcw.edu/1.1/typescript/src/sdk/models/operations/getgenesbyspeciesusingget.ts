import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GetGenesBySpeciesUsingGetPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=speciesTypeKey" })
  speciesTypeKey: number;
}


export class GetGenesBySpeciesUsingGetRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetGenesBySpeciesUsingGetPathParams;
}


export class GetGenesBySpeciesUsingGetResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
