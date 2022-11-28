import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GetGenesForLatestAssemblyUsingGetPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=taxonId" })
  taxonId: string;
}


export class GetGenesForLatestAssemblyUsingGetRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetGenesForLatestAssemblyUsingGetPathParams;
}


export class GetGenesForLatestAssemblyUsingGetResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
