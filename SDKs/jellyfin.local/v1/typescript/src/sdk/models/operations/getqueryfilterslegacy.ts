import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetQueryFiltersLegacyQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=includeItemTypes" })
  includeItemTypes?: string[];

  @Metadata({ data: "queryParam, style=form;explode=true;name=mediaTypes" })
  mediaTypes?: string[];

  @Metadata({ data: "queryParam, style=form;explode=true;name=parentId" })
  parentId?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=userId" })
  userId?: string;
}


export class GetQueryFiltersLegacySecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  customAuthentication: shared.SchemeCustomAuthentication;
}


export class GetQueryFiltersLegacyRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: GetQueryFiltersLegacyQueryParams;

  @Metadata()
  security: GetQueryFiltersLegacySecurity;
}


export class GetQueryFiltersLegacyResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  queryFiltersLegacy?: shared.QueryFiltersLegacy;

  @Metadata()
  statusCode: number;
}
