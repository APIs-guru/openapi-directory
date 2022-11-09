import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class DeleteRealmIdentityProviderInstancesAliasMappersIdPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=alias" })
  alias: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=realm" })
  realm: string;
}


export class DeleteRealmIdentityProviderInstancesAliasMappersIdRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: DeleteRealmIdentityProviderInstancesAliasMappersIdPathParams;
}


export class DeleteRealmIdentityProviderInstancesAliasMappersIdResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
