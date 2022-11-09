import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GetGenesForLatestAssemblyUsingGetPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=taxonId" })
  taxonId: string;
}


export class GetGenesForLatestAssemblyUsingGetRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetGenesForLatestAssemblyUsingGetPathParams;
}


export class GetGenesForLatestAssemblyUsingGetResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
