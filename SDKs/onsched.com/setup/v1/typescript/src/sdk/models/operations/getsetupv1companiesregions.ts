import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GetSetupV1CompaniesRegionsQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=limit" })
  limit?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=offset" })
  offset?: number;
}


export class GetSetupV1CompaniesRegionsRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: GetSetupV1CompaniesRegionsQueryParams;
}


export class GetSetupV1CompaniesRegionsResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  regionListViewModel?: Map<string, any>;

  @Metadata()
  statusCode: number;
}
