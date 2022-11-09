import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class ViewOnlyLinksReadPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=link_id" })
  linkId: string;
}


export class ViewOnlyLinksReadRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: ViewOnlyLinksReadPathParams;
}


export class ViewOnlyLinksReadResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
