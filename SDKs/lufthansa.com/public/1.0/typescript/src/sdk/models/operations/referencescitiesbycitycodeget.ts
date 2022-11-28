import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class ReferencesCitiesByCityCodeGetPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=cityCode" })
  cityCode: string;
}


export class ReferencesCitiesByCityCodeGetQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=lang" })
  lang?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=limit" })
  limit?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=offset" })
  offset?: string;
}


export class ReferencesCitiesByCityCodeGetHeaders extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=Accept" })
  accept: string;
}


export class ReferencesCitiesByCityCodeGetSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  auth: shared.SchemeAuth;
}


export class ReferencesCitiesByCityCodeGetRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: ReferencesCitiesByCityCodeGetPathParams;

  @SpeakeasyMetadata()
  queryParams: ReferencesCitiesByCityCodeGetQueryParams;

  @SpeakeasyMetadata()
  headers: ReferencesCitiesByCityCodeGetHeaders;

  @SpeakeasyMetadata()
  security: ReferencesCitiesByCityCodeGetSecurity;
}


export class ReferencesCitiesByCityCodeGetResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  referencesCitiesByCityCodeGet200ApplicationJsonObject?: Map<string, any>;

  @SpeakeasyMetadata()
  statusCode: number;
}
