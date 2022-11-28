import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class ListLicenseesPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=key" })
  key: string;
}


export class ListLicenseesQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=limit" })
  limit?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=query" })
  query?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=starting_after" })
  startingAfter?: number;
}


export class ListLicenseesSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=query" })
  apiKey: shared.SchemeApiKey;

  @SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=query" })
  userToken: shared.SchemeUserToken;
}


export class ListLicenseesRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: ListLicenseesPathParams;

  @SpeakeasyMetadata()
  queryParams: ListLicenseesQueryParams;

  @SpeakeasyMetadata()
  security: ListLicenseesSecurity;
}


export class ListLicenseesResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  addressLookupResponseSchema?: shared.AddressLookupResponseSchema;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  licenseeListResponseSchema?: shared.LicenseeListResponseSchema;

  @SpeakeasyMetadata()
  statusCode: number;
}
