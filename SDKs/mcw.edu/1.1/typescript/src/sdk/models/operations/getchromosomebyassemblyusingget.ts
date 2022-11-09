import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GetChromosomeByAssemblyUsingGetPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=chromosome" })
  chromosome: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=mapKey" })
  mapKey: number;
}


export class GetChromosomeByAssemblyUsingGetRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetChromosomeByAssemblyUsingGetPathParams;
}


export class GetChromosomeByAssemblyUsingGetResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
