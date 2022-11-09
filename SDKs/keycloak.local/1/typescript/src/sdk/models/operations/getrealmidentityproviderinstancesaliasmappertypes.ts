import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GetRealmIdentityProviderInstancesAliasMapperTypesPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=alias" })
  alias: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=realm" })
  realm: string;
}


export class GetRealmIdentityProviderInstancesAliasMapperTypesRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetRealmIdentityProviderInstancesAliasMapperTypesPathParams;
}


export class GetRealmIdentityProviderInstancesAliasMapperTypesResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
