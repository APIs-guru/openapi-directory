import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class PutRedirectToRequestBody extends SpeakeasyBase {
  @Metadata({ data: "form, name=status_code;" })
  statusCode?: number;

  @Metadata({ data: "form, name=url;" })
  url: string;
}


export class PutRedirectToRequest extends SpeakeasyBase {
  @Metadata({ data: "request, media_type=application/x-www-form-urlencoded" })
  request: PutRedirectToRequestBody;
}


export class PutRedirectToResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
