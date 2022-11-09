import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetItemCountsQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=isFavorite" })
  isFavorite?: boolean;

  @Metadata({ data: "queryParam, style=form;explode=true;name=userId" })
  userId?: string;
}


export class GetItemCountsSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  customAuthentication: shared.SchemeCustomAuthentication;
}


export class GetItemCountsRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: GetItemCountsQueryParams;

  @Metadata()
  security: GetItemCountsSecurity;
}


export class GetItemCountsResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  itemCounts?: shared.ItemCounts;

  @Metadata()
  statusCode: number;
}
