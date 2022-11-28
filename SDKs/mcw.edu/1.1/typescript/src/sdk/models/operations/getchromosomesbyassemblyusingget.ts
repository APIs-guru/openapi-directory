import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GetChromosomesByAssemblyUsingGetPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=mapKey" })
  mapKey: number;
}


export class GetChromosomesByAssemblyUsingGetRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetChromosomesByAssemblyUsingGetPathParams;
}


export class GetChromosomesByAssemblyUsingGetResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
