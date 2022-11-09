import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class ListLicenseesPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=key" })
  key: string;
}


export class ListLicenseesQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=limit" })
  limit?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=query" })
  query?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=starting_after" })
  startingAfter?: number;
}


export class ListLicenseesSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=apiKey;subtype=query" })
  apiKey: shared.SchemeApiKey;

  @Metadata({ data: "security, scheme=true;type=apiKey;subtype=query" })
  userToken: shared.SchemeUserToken;
}


export class ListLicenseesRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: ListLicenseesPathParams;

  @Metadata()
  queryParams: ListLicenseesQueryParams;

  @Metadata()
  security: ListLicenseesSecurity;
}


export class ListLicenseesResponse extends SpeakeasyBase {
  @Metadata()
  addressLookupResponseSchema?: shared.AddressLookupResponseSchema;

  @Metadata()
  contentType: string;

  @Metadata()
  licenseeListResponseSchema?: shared.LicenseeListResponseSchema;

  @Metadata()
  statusCode: number;
}
