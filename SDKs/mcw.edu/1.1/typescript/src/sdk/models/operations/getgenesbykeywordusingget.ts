import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GetGenesByKeywordUsingGetPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=keyword" })
  keyword: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=speciesTypeKey" })
  speciesTypeKey: number;
}


export class GetGenesByKeywordUsingGetRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetGenesByKeywordUsingGetPathParams;
}


export class GetGenesByKeywordUsingGetResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
