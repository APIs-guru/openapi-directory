import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum PostPersonCmdEnum {
    Register = "register"
}


export class PostPersonQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=cmd" })
  cmd: PostPersonCmdEnum;
}


export class PostPersonRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: PostPersonQueryParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/xml" })
  request: Uint8Array;
}


export class PostPersonResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
