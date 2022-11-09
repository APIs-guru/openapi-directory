import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class DeleteNetworkSmUserAccessDevicePathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=networkId" })
  networkId: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=userAccessDeviceId" })
  userAccessDeviceId: string;
}


export class DeleteNetworkSmUserAccessDeviceRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: DeleteNetworkSmUserAccessDevicePathParams;
}


export class DeleteNetworkSmUserAccessDeviceResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
