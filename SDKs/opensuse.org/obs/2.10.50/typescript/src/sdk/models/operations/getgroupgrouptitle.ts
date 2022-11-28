import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetGroupGroupTitlePathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=group_title" })
  groupTitle: string;
}


export class GetGroupGroupTitleSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=basic" })
  basicAuthentication: shared.SchemeBasicAuthentication;
}


export class GetGroupGroupTitleRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetGroupGroupTitlePathParams;

  @SpeakeasyMetadata()
  security: GetGroupGroupTitleSecurity;
}


export class GetGroupGroupTitleResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
