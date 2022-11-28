import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class VoiceConversionQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=delivered" })
  delivered: any;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=message-id" })
  messageId: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=timestamp" })
  timestamp: string;
}


export class VoiceConversionRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: VoiceConversionQueryParams;
}


export class VoiceConversionResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
