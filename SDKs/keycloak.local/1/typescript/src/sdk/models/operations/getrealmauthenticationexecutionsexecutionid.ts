import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GetRealmAuthenticationExecutionsExecutionIdPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=executionId" })
  executionId: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=realm" })
  realm: string;
}


export class GetRealmAuthenticationExecutionsExecutionIdRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetRealmAuthenticationExecutionsExecutionIdPathParams;
}


export class GetRealmAuthenticationExecutionsExecutionIdResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
