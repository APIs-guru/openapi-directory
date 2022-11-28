import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class PutRedirectToRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "form, name=status_code;" })
  statusCode?: number;

  @SpeakeasyMetadata({ data: "form, name=url;" })
  url: string;
}


export class PutRedirectToRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "request, media_type=application/x-www-form-urlencoded" })
  request: PutRedirectToRequestBody;
}


export class PutRedirectToResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
