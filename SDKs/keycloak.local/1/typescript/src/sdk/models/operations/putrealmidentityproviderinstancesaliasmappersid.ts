import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class PutRealmIdentityProviderInstancesAliasMappersIdPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=alias" })
  alias: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=realm" })
  realm: string;
}


export class PutRealmIdentityProviderInstancesAliasMappersIdRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: PutRealmIdentityProviderInstancesAliasMappersIdPathParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: shared.IdentityProviderMapperRepresentation;
}


export class PutRealmIdentityProviderInstancesAliasMappersIdResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
