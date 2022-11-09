import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class DcimPlatformsDeletePathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: number;
}


export class DcimPlatformsDeleteRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: DcimPlatformsDeletePathParams;
}


export class DcimPlatformsDeleteResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
