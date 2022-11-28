import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class DcimDeviceRolesDeletePathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: number;
}


export class DcimDeviceRolesDeleteRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: DcimDeviceRolesDeletePathParams;
}


export class DcimDeviceRolesDeleteResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
