import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class CreateConversationRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=display_name" })
  displayName?: string;

  @Metadata({ data: "json, name=image_url" })
  imageUrl?: string;

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=properties" })
  properties?: shared.ConversationProperties;
}


export class CreateConversationRequest extends SpeakeasyBase {
  @Metadata({ data: "request, media_type=application/json" })
  request?: CreateConversationRequestBody;
}


export class CreateConversation200ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=href" })
  href: string;

  @Metadata({ data: "json, name=id" })
  id: string;
}


export class CreateConversationResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  createConversation200ApplicationJsonObject?: CreateConversation200ApplicationJson;
}
