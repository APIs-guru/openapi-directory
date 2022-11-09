import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class DeleteDeveloperAccountsDeveloperAccountIdPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=developerAccountId" })
  developerAccountId: string;
}


export class DeleteDeveloperAccountsDeveloperAccountIdRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: DeleteDeveloperAccountsDeveloperAccountIdPathParams;
}


export class DeleteDeveloperAccountsDeveloperAccountIdResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
