import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetRealmAuthenticationRequiredActionsPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=realm" })
  realm: string;
}


export class GetRealmAuthenticationRequiredActionsRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetRealmAuthenticationRequiredActionsPathParams;
}


export class GetRealmAuthenticationRequiredActionsResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata({ elemType: shared.RequiredActionProviderRepresentation })
  requiredActionProviderRepresentations?: shared.RequiredActionProviderRepresentation[];

  @Metadata()
  statusCode: number;
}
