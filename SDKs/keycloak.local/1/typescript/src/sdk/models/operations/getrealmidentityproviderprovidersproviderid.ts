import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GetRealmIdentityProviderProvidersProviderIdPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=provider_id" })
  providerId: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=realm" })
  realm: string;
}


export class GetRealmIdentityProviderProvidersProviderIdRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetRealmIdentityProviderProvidersProviderIdPathParams;
}


export class GetRealmIdentityProviderProvidersProviderIdResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
