import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetRealmIdentityProviderInstancesAliasMappersPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=alias" })
  alias: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=realm" })
  realm: string;
}


export class GetRealmIdentityProviderInstancesAliasMappersRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetRealmIdentityProviderInstancesAliasMappersPathParams;
}


export class GetRealmIdentityProviderInstancesAliasMappersResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata({ elemType: shared.IdentityProviderMapperRepresentation })
  identityProviderMapperRepresentations?: shared.IdentityProviderMapperRepresentation[];

  @Metadata()
  statusCode: number;
}
