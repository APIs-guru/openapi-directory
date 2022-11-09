import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class WikiReadPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=wiki_id" })
  wikiId: string;
}


export class WikiReadRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: WikiReadPathParams;
}


export class WikiReadResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
