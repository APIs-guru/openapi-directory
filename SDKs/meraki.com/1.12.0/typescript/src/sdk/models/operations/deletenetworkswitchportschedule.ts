import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class DeleteNetworkSwitchPortSchedulePathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=networkId" })
  networkId: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=portScheduleId" })
  portScheduleId: string;
}


export class DeleteNetworkSwitchPortScheduleRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: DeleteNetworkSwitchPortSchedulePathParams;
}


export class DeleteNetworkSwitchPortScheduleResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
