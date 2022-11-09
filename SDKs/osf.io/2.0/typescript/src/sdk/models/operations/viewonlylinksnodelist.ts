import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class ViewOnlyLinksNodeListPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=link_id" })
  linkId: string;
}


export class ViewOnlyLinksNodeListRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: ViewOnlyLinksNodeListPathParams;
}


export class ViewOnlyLinksNodeListResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
