import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class PostPromotionsJsonQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=authtoken" })
  authtoken: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=login" })
  login: string;
}


export class PostPromotionsJsonRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: PostPromotionsJsonQueryParams;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.PromotionEdit;
}


export class PostPromotionsJsonResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  notFound?: any;

  @Metadata()
  promotion?: shared.Promotion;

  @Metadata()
  statusCode: number;
}
