import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class DeletePromotionsIdJsonPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: number;
}


export class DeletePromotionsIdJsonQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=authtoken" })
  authtoken: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=login" })
  login: string;
}


export class DeletePromotionsIdJsonRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: DeletePromotionsIdJsonPathParams;

  @Metadata()
  queryParams: DeletePromotionsIdJsonQueryParams;
}


export class DeletePromotionsIdJsonResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  deletePromotionsIdJson200ApplicationJsonString?: string;

  @Metadata()
  notFound?: any;

  @Metadata()
  statusCode: number;
}
