import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GetGeneByMapKeyUsingGetPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=mapKey" })
  mapKey: number;
}


export class GetGeneByMapKeyUsingGetRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetGeneByMapKeyUsingGetPathParams;
}


export class GetGeneByMapKeyUsingGetResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
