import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetRealmAuthenticationRequiredActionsPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=realm" })
  realm: string;
}


export class GetRealmAuthenticationRequiredActionsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetRealmAuthenticationRequiredActionsPathParams;
}


export class GetRealmAuthenticationRequiredActionsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata({ elemType: shared.RequiredActionProviderRepresentation })
  requiredActionProviderRepresentations?: shared.RequiredActionProviderRepresentation[];

  @SpeakeasyMetadata()
  statusCode: number;
}
