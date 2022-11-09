import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GetMapsBySpeciesUsingGetPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=speciesTypeKey" })
  speciesTypeKey: number;
}


export class GetMapsBySpeciesUsingGetRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetMapsBySpeciesUsingGetPathParams;
}


export class GetMapsBySpeciesUsingGetResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
