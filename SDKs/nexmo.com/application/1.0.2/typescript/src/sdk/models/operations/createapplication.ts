import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export enum CreateApplicationRequestBodyTypeEnum {
    Voice = "voice"
,    Messages = "messages"
}


export class CreateApplicationRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=answer_method" })
  answerMethod?: string;

  @Metadata({ data: "json, name=answer_url" })
  answerUrl?: string;

  @Metadata({ data: "json, name=api_key" })
  apiKey: string;

  @Metadata({ data: "json, name=api_secret" })
  apiSecret: string;

  @Metadata({ data: "json, name=event_method" })
  eventMethod?: string;

  @Metadata({ data: "json, name=event_url" })
  eventUrl?: string;

  @Metadata({ data: "json, name=inbound_method" })
  inboundMethod?: string;

  @Metadata({ data: "json, name=inbound_url" })
  inboundUrl?: string;

  @Metadata({ data: "json, name=name" })
  name: string;

  @Metadata({ data: "json, name=status_method" })
  statusMethod?: string;

  @Metadata({ data: "json, name=status_url" })
  statusUrl?: string;

  @Metadata({ data: "json, name=type" })
  type: CreateApplicationRequestBodyTypeEnum;
}


export class CreateApplicationRequest extends SpeakeasyBase {
  @Metadata({ data: "request, media_type=application/json" })
  request?: CreateApplicationRequestBody;
}


export class CreateApplicationResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  applicationCreated?: shared.ApplicationCreated;
}
