import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetApiVVersionMetalsSpotSummaryPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=version" })
  version: string;
}


export class GetApiVVersionMetalsSpotSummaryQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=currency" })
  currency?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=format" })
  format?: shared.ResponseFormatEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=metals" })
  metals: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=token" })
  token: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=unitofmeasure" })
  unitofmeasure?: shared.UnitOfMeasureEnum;
}


export class GetApiVVersionMetalsSpotSummaryRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetApiVVersionMetalsSpotSummaryPathParams;

  @Metadata()
  queryParams: GetApiVVersionMetalsSpotSummaryQueryParams;
}


export class GetApiVVersionMetalsSpotSummaryResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  problemDetails?: Map<string, any>;

  @Metadata()
  statusCode: number;

  @Metadata({ elemType: shared.SummaryResponse })
  summaryResponses?: shared.SummaryResponse[];
}
