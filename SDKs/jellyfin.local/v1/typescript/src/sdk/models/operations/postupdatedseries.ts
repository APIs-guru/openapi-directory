import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class PostUpdatedSeriesQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=tvdbId" })
  tvdbId?: string;
}


export class PostUpdatedSeriesSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  customAuthentication: shared.SchemeCustomAuthentication;
}


export class PostUpdatedSeriesRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: PostUpdatedSeriesQueryParams;

  @SpeakeasyMetadata()
  security: PostUpdatedSeriesSecurity;
}


export class PostUpdatedSeriesResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
