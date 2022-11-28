import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class DeleteGroupPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=serviceGroupId" })
  serviceGroupId: string;
}


export class DeleteGroupSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=basic" })
  otoroshiAuth: shared.SchemeOtoroshiAuth;
}


export class DeleteGroupRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: DeleteGroupPathParams;

  @SpeakeasyMetadata()
  security: DeleteGroupSecurity;
}


export class DeleteGroupResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  deleted?: shared.Deleted;

  @SpeakeasyMetadata()
  statusCode: number;
}
