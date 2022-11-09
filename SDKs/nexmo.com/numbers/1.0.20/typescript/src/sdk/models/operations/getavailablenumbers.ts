import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export enum GetAvailableNumbersFeaturesEnum {
    Sms = "SMS"
,    Voice = "VOICE"
,    SmsVoice = "SMS,VOICE"
,    Mms = "MMS"
,    SmsMms = "SMS,MMS"
,    VoiceMms = "VOICE,MMS"
,    SmsMmsVoice = "SMS,MMS,VOICE"
}


export class GetAvailableNumbersQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=country" })
  country: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=features" })
  features?: GetAvailableNumbersFeaturesEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=index" })
  index?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=pattern" })
  pattern?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=search_pattern" })
  searchPattern?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=size" })
  size?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=type" })
  type?: shared.TypeEnum;
}


export class GetAvailableNumbersRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: GetAvailableNumbersQueryParams;
}


export class GetAvailableNumbersResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  accountUnauthorized?: shared.AccountUnauthorized;

  @Metadata()
  availableNumbers?: shared.AvailableNumbers;
}
