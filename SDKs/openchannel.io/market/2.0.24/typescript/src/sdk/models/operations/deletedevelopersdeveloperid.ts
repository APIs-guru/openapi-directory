import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class DeleteDevelopersDeveloperIdPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=developerId" })
  developerId: string;
}


export class DeleteDevelopersDeveloperIdRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: DeleteDevelopersDeveloperIdPathParams;
}


export class DeleteDevelopersDeveloperIdResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
