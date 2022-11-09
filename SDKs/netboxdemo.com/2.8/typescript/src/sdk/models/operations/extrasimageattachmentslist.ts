import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class ExtrasImageAttachmentsListQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=limit" })
  limit?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=offset" })
  offset?: number;
}


export class ExtrasImageAttachmentsListRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: ExtrasImageAttachmentsListQueryParams;
}


export class ExtrasImageAttachmentsList200ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=count" })
  count: number;

  @Metadata({ data: "json, name=next" })
  next?: string;

  @Metadata({ data: "json, name=previous" })
  previous?: string;

  @Metadata({ data: "json, name=results", elemType: shared.ImageAttachment })
  results: shared.ImageAttachment[];
}


export class ExtrasImageAttachmentsListResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  extrasImageAttachmentsList200ApplicationJsonObject?: ExtrasImageAttachmentsList200ApplicationJson;
}
