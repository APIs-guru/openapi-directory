import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class SearchPathwaysUsingGetPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=searchString" })
  searchString: string;
}


export class SearchPathwaysUsingGetRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: SearchPathwaysUsingGetPathParams;
}


export class SearchPathwaysUsingGetResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
