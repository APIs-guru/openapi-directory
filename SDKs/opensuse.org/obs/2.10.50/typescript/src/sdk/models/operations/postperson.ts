import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum PostPersonCmdEnum {
    Register = "register"
}


export class PostPersonQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=cmd" })
  cmd: PostPersonCmdEnum;
}


export class PostPersonRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: PostPersonQueryParams;

  @Metadata({ data: "request, media_type=application/xml" })
  request: Uint8Array;
}


export class PostPersonResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
