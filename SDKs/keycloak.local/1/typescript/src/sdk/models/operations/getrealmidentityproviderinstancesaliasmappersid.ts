import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetRealmIdentityProviderInstancesAliasMappersIdPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=alias" })
  alias: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=realm" })
  realm: string;
}


export class GetRealmIdentityProviderInstancesAliasMappersIdRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetRealmIdentityProviderInstancesAliasMappersIdPathParams;
}


export class GetRealmIdentityProviderInstancesAliasMappersIdResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  identityProviderMapperRepresentation?: shared.IdentityProviderMapperRepresentation;

  @Metadata()
  statusCode: number;
}
