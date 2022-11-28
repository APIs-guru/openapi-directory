import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class SmsConversionQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=delivered" })
  delivered: any;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=message-id" })
  messageId: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=timestamp" })
  timestamp: string;
}


export class SmsConversionRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: SmsConversionQueryParams;
}


export class SmsConversionResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
