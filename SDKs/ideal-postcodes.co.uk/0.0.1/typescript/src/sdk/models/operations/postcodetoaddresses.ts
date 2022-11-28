import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class PostcodeToAddressesPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=postcode" })
  postcode: string;
}


export class PostcodeToAddressesQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=filter" })
  filter?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=licensee" })
  licensee?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=page" })
  page?: number;
}


export class PostcodeToAddressesSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=query" })
  apiKey: shared.SchemeApiKey;

  @SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=query" })
  userToken: shared.SchemeUserToken;
}


export class PostcodeToAddressesRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: PostcodeToAddressesPathParams;

  @SpeakeasyMetadata()
  queryParams: PostcodeToAddressesQueryParams;

  @SpeakeasyMetadata()
  security: PostcodeToAddressesSecurity;
}


export class PostcodeToAddressesResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  addressLookupResponseSchema?: shared.AddressLookupResponseSchema;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  errorResponseSchema?: shared.ErrorResponseSchema;

  @SpeakeasyMetadata()
  postcodeToAddressResponseSchema?: shared.PostcodeToAddressResponseSchema;

  @SpeakeasyMetadata()
  statusCode: number;
}
