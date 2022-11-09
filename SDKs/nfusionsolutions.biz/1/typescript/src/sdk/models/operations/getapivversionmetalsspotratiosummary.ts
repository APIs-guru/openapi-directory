import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetApiVVersionMetalsSpotRatioSummaryPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=version" })
  version: string;
}


export class GetApiVVersionMetalsSpotRatioSummaryQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=format" })
  format?: shared.ResponseFormatEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=pairs" })
  pairs: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=token" })
  token: string;
}


export class GetApiVVersionMetalsSpotRatioSummaryRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetApiVVersionMetalsSpotRatioSummaryPathParams;

  @Metadata()
  queryParams: GetApiVVersionMetalsSpotRatioSummaryQueryParams;
}


export class GetApiVVersionMetalsSpotRatioSummaryResponse extends SpeakeasyBase {
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
