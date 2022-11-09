import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class UpdateApplicationPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=app_id" })
  appId: string;
}

export enum UpdateApplicationRequestBodyTypeEnum {
    Voice = "voice"
,    Messages = "messages"
}


export class UpdateApplicationRequestBody extends SpeakeasyBase {
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

  @Metadata({ data: "json, name=name" })
  name: string;

  @Metadata({ data: "json, name=type" })
  type: UpdateApplicationRequestBodyTypeEnum;
}


export class UpdateApplicationRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: UpdateApplicationPathParams;

  @Metadata({ data: "request, media_type=application/json" })
  request?: UpdateApplicationRequestBody;
}


export class UpdateApplicationResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  application?: shared.Application;
}
