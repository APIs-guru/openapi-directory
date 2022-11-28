import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class PostAddedSeriesQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=tvdbId" })
  tvdbId?: string;
}


export class PostAddedSeriesSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  customAuthentication: shared.SchemeCustomAuthentication;
}


export class PostAddedSeriesRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: PostAddedSeriesQueryParams;

  @SpeakeasyMetadata()
  security: PostAddedSeriesSecurity;
}


export class PostAddedSeriesResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
