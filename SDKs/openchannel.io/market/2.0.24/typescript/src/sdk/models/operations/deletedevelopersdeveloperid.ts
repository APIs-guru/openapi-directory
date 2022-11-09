import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class DeleteDevelopersDeveloperIdPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=developerId" })
  developerId: string;
}


export class DeleteDevelopersDeveloperIdRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: DeleteDevelopersDeveloperIdPathParams;
}


export class DeleteDevelopersDeveloperIdResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
