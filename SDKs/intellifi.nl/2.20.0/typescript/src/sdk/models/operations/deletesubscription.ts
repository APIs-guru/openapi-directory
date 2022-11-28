import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class DeleteSubscriptionPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;
}


export class DeleteSubscriptionRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: DeleteSubscriptionPathParams;
}


export class DeleteSubscriptionResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  responseDefaultResource?: shared.ResponseDefaultResource;

  @SpeakeasyMetadata()
  statusCode: number;
}
