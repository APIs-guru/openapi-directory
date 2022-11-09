import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class RetrieveApplicationsQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=api_key" })
  apiKey: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=api_secret" })
  apiSecret: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=page_index" })
  pageIndex?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=page_size" })
  pageSize?: number;
}


export class RetrieveApplicationsRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: RetrieveApplicationsQueryParams;
}


export class RetrieveApplicationsResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  applications?: shared.Applications;
}
