import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class PostRedirectToRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "form, name=status_code;" })
  statusCode?: number;

  @SpeakeasyMetadata({ data: "form, name=url;" })
  url: string;
}


export class PostRedirectToRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "request, media_type=application/x-www-form-urlencoded" })
  request: PostRedirectToRequestBody;
}


export class PostRedirectToResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
