import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetMovieRecommendationsQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=categoryLimit" })
  categoryLimit?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=fields" })
  fields?: shared.ItemFieldsEnum[];

  @Metadata({ data: "queryParam, style=form;explode=true;name=itemLimit" })
  itemLimit?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=parentId" })
  parentId?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=userId" })
  userId?: string;
}


export class GetMovieRecommendationsSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  customAuthentication: shared.SchemeCustomAuthentication;
}


export class GetMovieRecommendationsRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: GetMovieRecommendationsQueryParams;

  @Metadata()
  security: GetMovieRecommendationsSecurity;
}


export class GetMovieRecommendationsResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata({ elemType: shared.RecommendationDto })
  recommendationDtos?: shared.RecommendationDto[];

  @Metadata()
  statusCode: number;
}
