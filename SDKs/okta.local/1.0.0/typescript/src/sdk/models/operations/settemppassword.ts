import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class SetTempPasswordPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=userId" })
  userId: string;
}


export class SetTempPasswordQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=tempPassword" })
  tempPassword?: string;
}


export class SetTempPasswordRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: SetTempPasswordPathParams;

  @Metadata()
  queryParams: SetTempPasswordQueryParams;

  @Metadata({ data: "request, media_type=text/plain" })
  request?: Uint8Array;
}


export class SetTempPasswordResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
