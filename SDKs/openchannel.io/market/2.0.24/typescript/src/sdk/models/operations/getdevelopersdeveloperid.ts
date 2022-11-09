import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GetDevelopersDeveloperIdPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=developerId" })
  developerId: string;
}


export class GetDevelopersDeveloperIdRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetDevelopersDeveloperIdPathParams;
}


export class GetDevelopersDeveloperIdResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
