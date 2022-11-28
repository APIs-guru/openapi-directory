import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GetRealmAuthenticationExecutionsExecutionIdPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=executionId" })
  executionId: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=realm" })
  realm: string;
}


export class GetRealmAuthenticationExecutionsExecutionIdRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetRealmAuthenticationExecutionsExecutionIdPathParams;
}


export class GetRealmAuthenticationExecutionsExecutionIdResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
