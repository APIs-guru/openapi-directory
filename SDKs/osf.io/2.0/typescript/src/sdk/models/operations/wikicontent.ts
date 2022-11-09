import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class WikiContentPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=wiki_id" })
  wikiId: string;
}


export class WikiContentRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: WikiContentPathParams;
}


export class WikiContentResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
