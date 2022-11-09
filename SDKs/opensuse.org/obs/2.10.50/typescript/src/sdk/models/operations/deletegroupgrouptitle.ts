import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class DeleteGroupGroupTitlePathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=group_title" })
  groupTitle: string;
}


export class DeleteGroupGroupTitleSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=http;subtype=basic" })
  basicAuthentication: shared.SchemeBasicAuthentication;
}


export class DeleteGroupGroupTitleRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: DeleteGroupGroupTitlePathParams;

  @Metadata()
  security: DeleteGroupGroupTitleSecurity;
}


export class DeleteGroupGroupTitleResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
