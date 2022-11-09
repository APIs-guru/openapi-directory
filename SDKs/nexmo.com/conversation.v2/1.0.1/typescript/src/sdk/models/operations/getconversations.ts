import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetConversationsQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=cursor" })
  cursor?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=date_end" })
  dateEnd?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=date_start" })
  dateStart?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=order" })
  order?: shared.OrderEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=page_size" })
  pageSize?: number;
}


export class GetConversationsRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: GetConversationsQueryParams;
}


export class GetConversationsResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  getConversations200ApplicationJsonAny?: any;
}
