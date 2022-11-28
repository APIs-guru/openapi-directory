import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GetCategoriesCountJsonQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=authtoken" })
  authtoken: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=login" })
  login: string;
}


export class GetCategoriesCountJsonRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: GetCategoriesCountJsonQueryParams;
}


export class GetCategoriesCountJsonResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  count?: any;

  @SpeakeasyMetadata()
  statusCode: number;
}
