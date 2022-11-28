import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class ViewOnlyLinksNodeListPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=link_id" })
  linkId: string;
}


export class ViewOnlyLinksNodeListRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: ViewOnlyLinksNodeListPathParams;
}


export class ViewOnlyLinksNodeListResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
