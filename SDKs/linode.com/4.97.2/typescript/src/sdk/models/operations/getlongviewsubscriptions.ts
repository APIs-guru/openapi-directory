import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetLongviewSubscriptionsQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=page" })
  page?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=page_size" })
  pageSize?: number;
}


export class GetLongviewSubscriptions200ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=data", elemType: shared.LongviewSubscription })
  data?: shared.LongviewSubscription[];

  @SpeakeasyMetadata({ data: "json, name=page" })
  page?: number;

  @SpeakeasyMetadata({ data: "json, name=pages" })
  pages?: number;

  @SpeakeasyMetadata({ data: "json, name=results" })
  results?: number;
}


export class GetLongviewSubscriptionsDefaultApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=errors", elemType: shared.ErrorObject })
  errors?: shared.ErrorObject[];
}


export class GetLongviewSubscriptionsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: GetLongviewSubscriptionsQueryParams;
}


export class GetLongviewSubscriptionsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  getLongviewSubscriptions200ApplicationJsonObject?: GetLongviewSubscriptions200ApplicationJson;

  @SpeakeasyMetadata()
  getLongviewSubscriptionsDefaultApplicationJsonObject?: GetLongviewSubscriptionsDefaultApplicationJson;
}
