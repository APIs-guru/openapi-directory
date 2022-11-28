import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class RetrieveApplicationsQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=api_key" })
  apiKey: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=api_secret" })
  apiSecret: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=page_index" })
  pageIndex?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=page_size" })
  pageSize?: number;
}


export class RetrieveApplicationsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: RetrieveApplicationsQueryParams;
}


export class RetrieveApplicationsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  applications?: shared.Applications;
}
