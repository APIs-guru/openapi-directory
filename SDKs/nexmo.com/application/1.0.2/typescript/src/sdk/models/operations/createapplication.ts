import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";


export enum CreateApplicationRequestBodyTypeEnum {
    Voice = "voice",
    Messages = "messages"
}


export class CreateApplicationRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=answer_method" })
  answerMethod?: string;

  @SpeakeasyMetadata({ data: "json, name=answer_url" })
  answerUrl?: string;

  @SpeakeasyMetadata({ data: "json, name=api_key" })
  apiKey: string;

  @SpeakeasyMetadata({ data: "json, name=api_secret" })
  apiSecret: string;

  @SpeakeasyMetadata({ data: "json, name=event_method" })
  eventMethod?: string;

  @SpeakeasyMetadata({ data: "json, name=event_url" })
  eventUrl?: string;

  @SpeakeasyMetadata({ data: "json, name=inbound_method" })
  inboundMethod?: string;

  @SpeakeasyMetadata({ data: "json, name=inbound_url" })
  inboundUrl?: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name: string;

  @SpeakeasyMetadata({ data: "json, name=status_method" })
  statusMethod?: string;

  @SpeakeasyMetadata({ data: "json, name=status_url" })
  statusUrl?: string;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type: CreateApplicationRequestBodyTypeEnum;
}


export class CreateApplicationRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request?: CreateApplicationRequestBody;
}


export class CreateApplicationResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  applicationCreated?: shared.ApplicationCreated;
}
