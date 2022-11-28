import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class DeleteDeveloperAccountsDeveloperAccountIdPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=developerAccountId" })
  developerAccountId: string;
}


export class DeleteDeveloperAccountsDeveloperAccountIdRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: DeleteDeveloperAccountsDeveloperAccountIdPathParams;
}


export class DeleteDeveloperAccountsDeveloperAccountIdResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
