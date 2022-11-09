import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GetRealmIdentityProviderProvidersProviderIdPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=provider_id" })
  providerId: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=realm" })
  realm: string;
}


export class GetRealmIdentityProviderProvidersProviderIdRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetRealmIdentityProviderProvidersProviderIdPathParams;
}


export class GetRealmIdentityProviderProvidersProviderIdResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
