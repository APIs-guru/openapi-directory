import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class ExtrasImageAttachmentsListQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=limit" })
  limit?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=offset" })
  offset?: number;
}


export class ExtrasImageAttachmentsList200ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=count" })
  count: number;

  @SpeakeasyMetadata({ data: "json, name=next" })
  next?: string;

  @SpeakeasyMetadata({ data: "json, name=previous" })
  previous?: string;

  @SpeakeasyMetadata({ data: "json, name=results", elemType: shared.ImageAttachment })
  results: shared.ImageAttachment[];
}


export class ExtrasImageAttachmentsListRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: ExtrasImageAttachmentsListQueryParams;
}


export class ExtrasImageAttachmentsListResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  extrasImageAttachmentsList200ApplicationJsonObject?: ExtrasImageAttachmentsList200ApplicationJson;
}
