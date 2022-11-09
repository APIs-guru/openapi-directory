import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class PostRedirectToRequestBody extends SpeakeasyBase {
  @Metadata({ data: "form, name=status_code;" })
  statusCode?: number;

  @Metadata({ data: "form, name=url;" })
  url: string;
}


export class PostRedirectToRequest extends SpeakeasyBase {
  @Metadata({ data: "request, media_type=application/x-www-form-urlencoded" })
  request: PostRedirectToRequestBody;
}


export class PostRedirectToResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
