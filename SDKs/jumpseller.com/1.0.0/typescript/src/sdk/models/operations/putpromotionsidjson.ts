import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class PutPromotionsIdJsonPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: number;
}


export class PutPromotionsIdJsonQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=authtoken" })
  authtoken: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=login" })
  login: string;
}


export class PutPromotionsIdJsonRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: PutPromotionsIdJsonPathParams;

  @Metadata()
  queryParams: PutPromotionsIdJsonQueryParams;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.PromotionEdit;
}


export class PutPromotionsIdJsonResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  notFound?: any;

  @Metadata()
  promotion?: shared.Promotion;

  @Metadata()
  statusCode: number;
}
