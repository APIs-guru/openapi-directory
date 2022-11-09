import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class ReferencesCitiesByCityCodeGetPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=cityCode" })
  cityCode: string;
}


export class ReferencesCitiesByCityCodeGetQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=lang" })
  lang?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=limit" })
  limit?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=offset" })
  offset?: string;
}


export class ReferencesCitiesByCityCodeGetHeaders extends SpeakeasyBase {
  @Metadata({ data: "header, style=simple;explode=false;name=Accept" })
  accept: string;
}


export class ReferencesCitiesByCityCodeGetSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  auth: shared.SchemeAuth;
}


export class ReferencesCitiesByCityCodeGetRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: ReferencesCitiesByCityCodeGetPathParams;

  @Metadata()
  queryParams: ReferencesCitiesByCityCodeGetQueryParams;

  @Metadata()
  headers: ReferencesCitiesByCityCodeGetHeaders;

  @Metadata()
  security: ReferencesCitiesByCityCodeGetSecurity;
}


export class ReferencesCitiesByCityCodeGetResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  referencesCitiesByCityCodeGet200ApplicationJsonObject?: Map<string, any>;

  @Metadata()
  statusCode: number;
}
