import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class ChatSpacesWebhooksPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=parent" })
  parent: string;
}

export enum ChatSpacesWebhooksMessageReplyOptionEnum {
    MessageReplyOptionUnspecified = "MESSAGE_REPLY_OPTION_UNSPECIFIED",
    ReplyMessageFallbackToNewThread = "REPLY_MESSAGE_FALLBACK_TO_NEW_THREAD",
    ReplyMessageOrFail = "REPLY_MESSAGE_OR_FAIL"
}


export class ChatSpacesWebhooksQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" })
  dollarXgafv?: shared.XgafvEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" })
  accessToken?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" })
  alt?: shared.AltEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" })
  callback?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" })
  fields?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" })
  key?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=messageId" })
  messageId?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=messageReplyOption" })
  messageReplyOption?: ChatSpacesWebhooksMessageReplyOptionEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" })
  oauthToken?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" })
  prettyPrint?: boolean;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" })
  quotaUser?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=requestId" })
  requestId?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=threadKey" })
  threadKey?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" })
  uploadType?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" })
  uploadProtocol?: string;
}


export class ChatSpacesWebhooksRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: ChatSpacesWebhooksPathParams;

  @SpeakeasyMetadata()
  queryParams: ChatSpacesWebhooksQueryParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request?: shared.MessageInput;
}


export class ChatSpacesWebhooksResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  message?: shared.Message;

  @SpeakeasyMetadata()
  statusCode: number;
}
