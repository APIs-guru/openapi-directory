import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetOwnedNumbersQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=application_id" })
  applicationId?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=country" })
  country?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=has_application" })
  hasApplication?: boolean;

  @Metadata({ data: "queryParam, style=form;explode=true;name=index" })
  index?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=pattern" })
  pattern?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=search_pattern" })
  searchPattern?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=size" })
  size?: number;
}


export class GetOwnedNumbersRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: GetOwnedNumbersQueryParams;
}


export class GetOwnedNumbersResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  accountUnauthorized?: shared.AccountUnauthorized;

  @Metadata()
  inboundNumbers?: shared.InboundNumbers;
}
