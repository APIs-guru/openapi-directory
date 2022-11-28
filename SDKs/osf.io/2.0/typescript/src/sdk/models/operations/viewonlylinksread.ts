import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class ViewOnlyLinksReadPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=link_id" })
  linkId: string;
}


export class ViewOnlyLinksReadRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: ViewOnlyLinksReadPathParams;
}


export class ViewOnlyLinksReadResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
