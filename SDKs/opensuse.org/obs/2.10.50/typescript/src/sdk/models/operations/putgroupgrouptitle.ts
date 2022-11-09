import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class PutGroupGroupTitlePathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=group_title" })
  groupTitle: string;
}


export class PutGroupGroupTitleSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=http;subtype=basic" })
  basicAuthentication: shared.SchemeBasicAuthentication;
}


export class PutGroupGroupTitleRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: PutGroupGroupTitlePathParams;

  @Metadata({ data: "request, media_type=application/xml" })
  request: Uint8Array;

  @Metadata()
  security: PutGroupGroupTitleSecurity;
}


export class PutGroupGroupTitleResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
