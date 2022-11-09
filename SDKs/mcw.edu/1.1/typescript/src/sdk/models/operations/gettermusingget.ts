import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GetTermUsingGetPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=accId" })
  accId: string;
}


export class GetTermUsingGetRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetTermUsingGetPathParams;
}


export class GetTermUsingGetResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
