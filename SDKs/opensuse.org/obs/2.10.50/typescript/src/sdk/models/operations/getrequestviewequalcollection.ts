import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetRequestViewEqualCollectionQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=ids" })
  ids?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=limit" })
  limit?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=package" })
  package?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=project" })
  project?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=roles" })
  roles?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=states" })
  states?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=types" })
  types?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=user" })
  user?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=withfullhistory" })
  withfullhistory?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=withhistory" })
  withhistory?: string;
}


export class GetRequestViewEqualCollectionSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=basic" })
  basicAuthentication: shared.SchemeBasicAuthentication;
}


export class GetRequestViewEqualCollectionRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: GetRequestViewEqualCollectionQueryParams;

  @SpeakeasyMetadata()
  security: GetRequestViewEqualCollectionSecurity;
}


export class GetRequestViewEqualCollectionResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
