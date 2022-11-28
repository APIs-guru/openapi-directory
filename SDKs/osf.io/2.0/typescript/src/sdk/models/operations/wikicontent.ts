import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class WikiContentPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=wiki_id" })
  wikiId: string;
}


export class WikiContentRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: WikiContentPathParams;
}


export class WikiContentResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
