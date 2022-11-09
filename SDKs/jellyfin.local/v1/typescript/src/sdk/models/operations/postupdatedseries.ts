import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class PostUpdatedSeriesQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=tvdbId" })
  tvdbId?: string;
}


export class PostUpdatedSeriesSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  customAuthentication: shared.SchemeCustomAuthentication;
}


export class PostUpdatedSeriesRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: PostUpdatedSeriesQueryParams;

  @Metadata()
  security: PostUpdatedSeriesSecurity;
}


export class PostUpdatedSeriesResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
