import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetPromotionsIdJsonPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: number;
}


export class GetPromotionsIdJsonQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=authtoken" })
  authtoken: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=login" })
  login: string;
}


export class GetPromotionsIdJsonRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetPromotionsIdJsonPathParams;

  @Metadata()
  queryParams: GetPromotionsIdJsonQueryParams;
}


export class GetPromotionsIdJsonResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  notFound?: any;

  @Metadata()
  promotion?: shared.Promotion;

  @Metadata()
  statusCode: number;
}
