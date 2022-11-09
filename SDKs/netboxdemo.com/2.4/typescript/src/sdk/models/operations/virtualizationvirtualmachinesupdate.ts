import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class VirtualizationVirtualMachinesUpdatePathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: number;
}


export class VirtualizationVirtualMachinesUpdateRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: VirtualizationVirtualMachinesUpdatePathParams;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.WritableVirtualMachine;
}


export class VirtualizationVirtualMachinesUpdateResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  virtualMachine?: shared.VirtualMachine;
}
