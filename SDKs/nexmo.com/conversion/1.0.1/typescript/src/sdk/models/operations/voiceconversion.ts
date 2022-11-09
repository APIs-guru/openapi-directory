import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class VoiceConversionQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=delivered" })
  delivered: any;

  @Metadata({ data: "queryParam, style=form;explode=true;name=message-id" })
  messageId: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=timestamp" })
  timestamp: string;
}


export class VoiceConversionRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: VoiceConversionQueryParams;
}


export class VoiceConversionResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
