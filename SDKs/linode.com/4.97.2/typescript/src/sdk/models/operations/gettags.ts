import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetTagsQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=page" })
  page?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=page_size" })
  pageSize?: number;
}


export class GetTagsSecurityOption1 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=http;subtype=bearer" })
  personalAccessToken: shared.SchemePersonalAccessToken;
}


export class GetTagsSecurityOption2 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth: shared.SchemeOauth;
}


export class GetTagsSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, option=true" })
  option1?: GetTagsSecurityOption1;

  @Metadata({ data: "security, option=true" })
  option2?: GetTagsSecurityOption2;
}


export class GetTagsRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: GetTagsQueryParams;

  @Metadata()
  security: GetTagsSecurity;
}


export class GetTags200ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=data", elemType: shared.Tag })
  data?: shared.Tag[];

  @Metadata({ data: "json, name=page" })
  page?: number;

  @Metadata({ data: "json, name=pages" })
  pages?: number;

  @Metadata({ data: "json, name=results" })
  results?: number;
}


export class GetTagsDefaultApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=errors", elemType: shared.ErrorObject })
  errors?: shared.ErrorObject[];
}


export class GetTagsResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  getTags200ApplicationJsonObject?: GetTags200ApplicationJson;

  @Metadata()
  getTagsDefaultApplicationJsonObject?: GetTagsDefaultApplicationJson;
}
