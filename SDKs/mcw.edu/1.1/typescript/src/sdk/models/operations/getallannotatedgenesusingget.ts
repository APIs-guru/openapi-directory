import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GetAllAnnotatedGenesUsingGetPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=accId" })
  accId: string;
}


export class GetAllAnnotatedGenesUsingGetRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetAllAnnotatedGenesUsingGetPathParams;
}


export class GetAllAnnotatedGenesUsingGetResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
