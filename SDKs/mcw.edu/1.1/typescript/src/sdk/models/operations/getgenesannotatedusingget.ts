import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GetGenesAnnotatedUsingGetPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=accId" })
  accId: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=speciesTypeKey" })
  speciesTypeKey: number;
}


export class GetGenesAnnotatedUsingGetRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetGenesAnnotatedUsingGetPathParams;
}


export class GetGenesAnnotatedUsingGetResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
