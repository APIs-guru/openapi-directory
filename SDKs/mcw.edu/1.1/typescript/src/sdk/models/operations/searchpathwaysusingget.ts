import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class SearchPathwaysUsingGetPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=searchString" })
  searchString: string;
}


export class SearchPathwaysUsingGetRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: SearchPathwaysUsingGetPathParams;
}


export class SearchPathwaysUsingGetResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
