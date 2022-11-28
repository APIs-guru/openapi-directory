import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GetSetupV1CompaniesRegionsQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=limit" })
  limit?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=offset" })
  offset?: number;
}


export class GetSetupV1CompaniesRegionsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: GetSetupV1CompaniesRegionsQueryParams;
}


export class GetSetupV1CompaniesRegionsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  regionListViewModel?: Map<string, any>;

  @SpeakeasyMetadata()
  statusCode: number;
}
