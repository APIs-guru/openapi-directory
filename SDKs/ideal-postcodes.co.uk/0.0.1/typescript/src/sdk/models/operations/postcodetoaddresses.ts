import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class PostcodeToAddressesPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=postcode" })
  postcode: string;
}


export class PostcodeToAddressesQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=filter" })
  filter?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=licensee" })
  licensee?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=page" })
  page?: number;
}


export class PostcodeToAddressesSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=apiKey;subtype=query" })
  apiKey: shared.SchemeApiKey;

  @Metadata({ data: "security, scheme=true;type=apiKey;subtype=query" })
  userToken: shared.SchemeUserToken;
}


export class PostcodeToAddressesRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: PostcodeToAddressesPathParams;

  @Metadata()
  queryParams: PostcodeToAddressesQueryParams;

  @Metadata()
  security: PostcodeToAddressesSecurity;
}


export class PostcodeToAddressesResponse extends SpeakeasyBase {
  @Metadata()
  addressLookupResponseSchema?: shared.AddressLookupResponseSchema;

  @Metadata()
  contentType: string;

  @Metadata()
  errorResponseSchema?: shared.ErrorResponseSchema;

  @Metadata()
  postcodeToAddressResponseSchema?: shared.PostcodeToAddressResponseSchema;

  @Metadata()
  statusCode: number;
}
