import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GetMapsBySpeciesUsingGetPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=speciesTypeKey" })
  speciesTypeKey: number;
}


export class GetMapsBySpeciesUsingGetRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetMapsBySpeciesUsingGetPathParams;
}


export class GetMapsBySpeciesUsingGetResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
