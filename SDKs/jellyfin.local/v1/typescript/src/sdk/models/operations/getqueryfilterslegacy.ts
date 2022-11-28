import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetQueryFiltersLegacyQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=includeItemTypes" })
  includeItemTypes?: string[];

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=mediaTypes" })
  mediaTypes?: string[];

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=parentId" })
  parentId?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=userId" })
  userId?: string;
}


export class GetQueryFiltersLegacySecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  customAuthentication: shared.SchemeCustomAuthentication;
}


export class GetQueryFiltersLegacyRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: GetQueryFiltersLegacyQueryParams;

  @SpeakeasyMetadata()
  security: GetQueryFiltersLegacySecurity;
}


export class GetQueryFiltersLegacyResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  queryFiltersLegacy?: shared.QueryFiltersLegacy;

  @SpeakeasyMetadata()
  statusCode: number;
}
