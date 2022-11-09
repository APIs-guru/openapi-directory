import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class ResizeDiskPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=diskId" })
  diskId: number;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=linodeId" })
  linodeId: number;
}


export class ResizeDiskSecurityOption1 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=http;subtype=bearer" })
  personalAccessToken: shared.SchemePersonalAccessToken;
}


export class ResizeDiskSecurityOption2 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth: shared.SchemeOauth;
}


export class ResizeDiskSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, option=true" })
  option1?: ResizeDiskSecurityOption1;

  @Metadata({ data: "security, option=true" })
  option2?: ResizeDiskSecurityOption2;
}


export class ResizeDiskRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: ResizeDiskPathParams;

  @Metadata({ data: "request, media_type=application/json" })
  request: any;

  @Metadata()
  security: ResizeDiskSecurity;
}


export class ResizeDiskDefaultApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=errors", elemType: shared.ErrorObject })
  errors?: shared.ErrorObject[];
}


export class ResizeDiskResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  resizeDisk200ApplicationJsonObject?: Map<string, any>;

  @Metadata()
  resizeDiskDefaultApplicationJsonObject?: ResizeDiskDefaultApplicationJson;
}
