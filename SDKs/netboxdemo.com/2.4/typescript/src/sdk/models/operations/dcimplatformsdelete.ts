import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class DcimPlatformsDeletePathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: number;
}


export class DcimPlatformsDeleteRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: DcimPlatformsDeletePathParams;
}


export class DcimPlatformsDeleteResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
