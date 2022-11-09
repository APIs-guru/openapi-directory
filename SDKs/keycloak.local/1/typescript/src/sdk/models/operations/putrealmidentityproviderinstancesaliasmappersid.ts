import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class PutRealmIdentityProviderInstancesAliasMappersIdPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=alias" })
  alias: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=realm" })
  realm: string;
}


export class PutRealmIdentityProviderInstancesAliasMappersIdRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: PutRealmIdentityProviderInstancesAliasMappersIdPathParams;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.IdentityProviderMapperRepresentation;
}


export class PutRealmIdentityProviderInstancesAliasMappersIdResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
