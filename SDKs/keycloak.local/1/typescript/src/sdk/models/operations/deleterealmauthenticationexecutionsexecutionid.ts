import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class DeleteRealmAuthenticationExecutionsExecutionIdPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=executionId" })
  executionId: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=realm" })
  realm: string;
}


export class DeleteRealmAuthenticationExecutionsExecutionIdRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: DeleteRealmAuthenticationExecutionsExecutionIdPathParams;
}


export class DeleteRealmAuthenticationExecutionsExecutionIdResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
