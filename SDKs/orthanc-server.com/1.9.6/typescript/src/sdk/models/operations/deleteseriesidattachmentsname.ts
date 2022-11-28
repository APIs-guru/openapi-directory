import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class DeleteSeriesIdAttachmentsNamePathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=name" })
  name: string;
}


export class DeleteSeriesIdAttachmentsNameHeaders extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=If-Match" })
  ifMatch?: string;
}


export class DeleteSeriesIdAttachmentsNameRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: DeleteSeriesIdAttachmentsNamePathParams;

  @SpeakeasyMetadata()
  headers: DeleteSeriesIdAttachmentsNameHeaders;
}


export class DeleteSeriesIdAttachmentsNameResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
