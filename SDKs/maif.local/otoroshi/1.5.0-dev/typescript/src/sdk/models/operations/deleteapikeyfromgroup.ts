import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class DeleteApiKeyFromGroupPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=clientId" })
  clientId: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=groupId" })
  groupId: string;
}


export class DeleteApiKeyFromGroupSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=basic" })
  otoroshiAuth: shared.SchemeOtoroshiAuth;
}


export class DeleteApiKeyFromGroupRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: DeleteApiKeyFromGroupPathParams;

  @SpeakeasyMetadata()
  security: DeleteApiKeyFromGroupSecurity;
}


export class DeleteApiKeyFromGroupResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  deleted?: shared.Deleted;

  @SpeakeasyMetadata()
  statusCode: number;
}
