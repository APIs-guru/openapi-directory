import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetItemCountsQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=isFavorite" })
  isFavorite?: boolean;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=userId" })
  userId?: string;
}


export class GetItemCountsSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  customAuthentication: shared.SchemeCustomAuthentication;
}


export class GetItemCountsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: GetItemCountsQueryParams;

  @SpeakeasyMetadata()
  security: GetItemCountsSecurity;
}


export class GetItemCountsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  itemCounts?: shared.ItemCounts;

  @SpeakeasyMetadata()
  statusCode: number;
}
