import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GetChromosomeByAssemblyUsingGetPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=chromosome" })
  chromosome: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=mapKey" })
  mapKey: number;
}


export class GetChromosomeByAssemblyUsingGetRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetChromosomeByAssemblyUsingGetPathParams;
}


export class GetChromosomeByAssemblyUsingGetResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
