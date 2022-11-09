import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GetChromosomesByAssemblyUsingGetPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=mapKey" })
  mapKey: number;
}


export class GetChromosomesByAssemblyUsingGetRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetChromosomesByAssemblyUsingGetPathParams;
}


export class GetChromosomesByAssemblyUsingGetResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
