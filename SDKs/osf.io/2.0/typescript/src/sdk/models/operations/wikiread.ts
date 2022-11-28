import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class WikiReadPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=wiki_id" })
  wikiId: string;
}


export class WikiReadRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: WikiReadPathParams;
}


export class WikiReadResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
