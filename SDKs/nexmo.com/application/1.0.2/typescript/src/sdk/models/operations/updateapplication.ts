import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class UpdateApplicationPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=app_id" })
  appId: string;
}

export enum UpdateApplicationRequestBodyTypeEnum {
    Voice = "voice",
    Messages = "messages"
}


export class UpdateApplicationRequestBody extends SpeakeasyBase {
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

  @SpeakeasyMetadata({ data: "json, name=name" })
  name: string;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type: UpdateApplicationRequestBodyTypeEnum;
}


export class UpdateApplicationRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: UpdateApplicationPathParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request?: UpdateApplicationRequestBody;
}


export class UpdateApplicationResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  application?: shared.Application;
}
