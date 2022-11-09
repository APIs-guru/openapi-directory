import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class SmsConversionQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=delivered" })
  delivered: any;

  @Metadata({ data: "queryParam, style=form;explode=true;name=message-id" })
  messageId: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=timestamp" })
  timestamp: string;
}


export class SmsConversionRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: SmsConversionQueryParams;
}


export class SmsConversionResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
