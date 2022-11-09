import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class DcimDeviceRolesDeletePathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: number;
}


export class DcimDeviceRolesDeleteRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: DcimDeviceRolesDeletePathParams;
}


export class DcimDeviceRolesDeleteResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
