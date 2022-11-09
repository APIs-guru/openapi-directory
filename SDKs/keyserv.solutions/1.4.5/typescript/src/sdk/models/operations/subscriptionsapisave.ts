import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class SubscriptionsApiSaveRequest extends SpeakeasyBase {
  @Metadata({ data: "request, media_type=application/json" })
  request: any;
}


export class SubscriptionsApiSaveResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  subscriptionsApiSave201ApplicationJsonOneOf?: any;
}
