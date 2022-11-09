import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GetCategoriesCountJsonQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=authtoken" })
  authtoken: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=login" })
  login: string;
}


export class GetCategoriesCountJsonRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: GetCategoriesCountJsonQueryParams;
}


export class GetCategoriesCountJsonResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  count?: any;

  @Metadata()
  statusCode: number;
}
