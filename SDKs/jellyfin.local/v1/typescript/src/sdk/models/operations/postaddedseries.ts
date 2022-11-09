import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class PostAddedSeriesQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=tvdbId" })
  tvdbId?: string;
}


export class PostAddedSeriesSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  customAuthentication: shared.SchemeCustomAuthentication;
}


export class PostAddedSeriesRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: PostAddedSeriesQueryParams;

  @Metadata()
  security: PostAddedSeriesSecurity;
}


export class PostAddedSeriesResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
