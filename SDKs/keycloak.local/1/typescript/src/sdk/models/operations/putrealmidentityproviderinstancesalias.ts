import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class PutRealmIdentityProviderInstancesAliasPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=alias" })
  alias: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=realm" })
  realm: string;
}


export class PutRealmIdentityProviderInstancesAliasRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: PutRealmIdentityProviderInstancesAliasPathParams;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.IdentityProviderRepresentation;
}


export class PutRealmIdentityProviderInstancesAliasResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
