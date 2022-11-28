import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";


export enum GetAvailableNumbersFeaturesEnum {
    Sms = "SMS",
    Voice = "VOICE",
    SmsVoice = "SMS,VOICE",
    Mms = "MMS",
    SmsMms = "SMS,MMS",
    VoiceMms = "VOICE,MMS",
    SmsMmsVoice = "SMS,MMS,VOICE"
}


export class GetAvailableNumbersQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=country" })
  country: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=features" })
  features?: GetAvailableNumbersFeaturesEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=index" })
  index?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=pattern" })
  pattern?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=search_pattern" })
  searchPattern?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=size" })
  size?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=type" })
  type?: shared.TypeEnum;
}


export class GetAvailableNumbersRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: GetAvailableNumbersQueryParams;
}


export class GetAvailableNumbersResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  accountUnauthorized?: shared.AccountUnauthorized;

  @SpeakeasyMetadata()
  availableNumbers?: shared.AvailableNumbers;
}
