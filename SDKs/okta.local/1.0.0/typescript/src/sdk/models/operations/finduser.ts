import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class FindUserQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=q" })
  q?: string;
}


export class FindUserRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: FindUserQueryParams;

  @Metadata({ data: "request, media_type=application/octet-stream" })
  request?: Uint8Array;
}


export class FindUserResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
