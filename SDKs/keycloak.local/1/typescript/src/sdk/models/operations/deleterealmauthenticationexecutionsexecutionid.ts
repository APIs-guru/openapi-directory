import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class DeleteRealmAuthenticationExecutionsExecutionIdPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=executionId" })
  executionId: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=realm" })
  realm: string;
}


export class DeleteRealmAuthenticationExecutionsExecutionIdRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: DeleteRealmAuthenticationExecutionsExecutionIdPathParams;
}


export class DeleteRealmAuthenticationExecutionsExecutionIdResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
