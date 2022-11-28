import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetOwnedNumbersQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=application_id" })
  applicationId?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=country" })
  country?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=has_application" })
  hasApplication?: boolean;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=index" })
  index?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=pattern" })
  pattern?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=search_pattern" })
  searchPattern?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=size" })
  size?: number;
}


export class GetOwnedNumbersRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: GetOwnedNumbersQueryParams;
}


export class GetOwnedNumbersResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  accountUnauthorized?: shared.AccountUnauthorized;

  @SpeakeasyMetadata()
  inboundNumbers?: shared.InboundNumbers;
}
