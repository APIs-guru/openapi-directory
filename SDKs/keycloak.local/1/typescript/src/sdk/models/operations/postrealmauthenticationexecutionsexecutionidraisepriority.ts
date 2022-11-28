import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class PostRealmAuthenticationExecutionsExecutionIdRaisePriorityPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=executionId" })
  executionId: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=realm" })
  realm: string;
}


export class PostRealmAuthenticationExecutionsExecutionIdRaisePriorityRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: PostRealmAuthenticationExecutionsExecutionIdRaisePriorityPathParams;
}


export class PostRealmAuthenticationExecutionsExecutionIdRaisePriorityResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
