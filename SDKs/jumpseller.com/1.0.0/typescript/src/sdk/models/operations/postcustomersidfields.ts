import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class PostCustomersIdFieldsPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: number;
}


export class PostCustomersIdFieldsQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=authtoken" })
  authtoken: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=login" })
  login: string;
}


export class PostCustomersIdFieldsRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: PostCustomersIdFieldsPathParams;

  @Metadata()
  queryParams: PostCustomersIdFieldsQueryParams;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.CustomerAdditionalFieldEdit;
}


export class PostCustomersIdFieldsResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  customerAdditionalField?: shared.CustomerAdditionalField;

  @Metadata()
  notFound?: any;

  @Metadata()
  statusCode: number;
}
