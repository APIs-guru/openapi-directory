import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetGroupGroupTitlePathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=group_title" })
  groupTitle: string;
}


export class GetGroupGroupTitleSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=http;subtype=basic" })
  basicAuthentication: shared.SchemeBasicAuthentication;
}


export class GetGroupGroupTitleRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetGroupGroupTitlePathParams;

  @Metadata()
  security: GetGroupGroupTitleSecurity;
}


export class GetGroupGroupTitleResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
