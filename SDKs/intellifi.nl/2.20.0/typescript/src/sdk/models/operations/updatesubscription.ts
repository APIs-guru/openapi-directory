import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class UpdateSubscriptionPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;
}


export class UpdateSubscriptionRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: UpdateSubscriptionPathParams;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.Subscription;
}


export class UpdateSubscriptionResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  responseDefaultResource?: shared.ResponseDefaultResource;

  @Metadata()
  statusCode: number;
}
