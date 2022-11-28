import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class DeleteGroupGroupTitlePathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=group_title" })
  groupTitle: string;
}


export class DeleteGroupGroupTitleSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=basic" })
  basicAuthentication: shared.SchemeBasicAuthentication;
}


export class DeleteGroupGroupTitleRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: DeleteGroupGroupTitlePathParams;

  @SpeakeasyMetadata()
  security: DeleteGroupGroupTitleSecurity;
}


export class DeleteGroupGroupTitleResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
