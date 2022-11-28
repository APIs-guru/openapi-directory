import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GetDevelopersDeveloperIdPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=developerId" })
  developerId: string;
}


export class GetDevelopersDeveloperIdRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetDevelopersDeveloperIdPathParams;
}


export class GetDevelopersDeveloperIdResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
