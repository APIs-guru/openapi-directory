import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetMovieRecommendationsQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=categoryLimit" })
  categoryLimit?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" })
  fields?: shared.ItemFieldsEnum[];

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=itemLimit" })
  itemLimit?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=parentId" })
  parentId?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=userId" })
  userId?: string;
}


export class GetMovieRecommendationsSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  customAuthentication: shared.SchemeCustomAuthentication;
}


export class GetMovieRecommendationsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: GetMovieRecommendationsQueryParams;

  @SpeakeasyMetadata()
  security: GetMovieRecommendationsSecurity;
}


export class GetMovieRecommendationsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata({ elemType: shared.RecommendationDto })
  recommendationDtos?: shared.RecommendationDto[];

  @SpeakeasyMetadata()
  statusCode: number;
}
