import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class PostRealmAuthenticationExecutionsExecutionIdLowerPriorityPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=executionId" })
  executionId: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=realm" })
  realm: string;
}


export class PostRealmAuthenticationExecutionsExecutionIdLowerPriorityRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: PostRealmAuthenticationExecutionsExecutionIdLowerPriorityPathParams;
}


export class PostRealmAuthenticationExecutionsExecutionIdLowerPriorityResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
