import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class PostRealmAuthenticationExecutionsExecutionIdLowerPriorityPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=executionId" })
  executionId: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=realm" })
  realm: string;
}


export class PostRealmAuthenticationExecutionsExecutionIdLowerPriorityRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: PostRealmAuthenticationExecutionsExecutionIdLowerPriorityPathParams;
}


export class PostRealmAuthenticationExecutionsExecutionIdLowerPriorityResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
