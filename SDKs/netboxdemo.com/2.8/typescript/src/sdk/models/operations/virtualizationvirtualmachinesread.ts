import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class VirtualizationVirtualMachinesReadPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: number;
}


export class VirtualizationVirtualMachinesReadRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: VirtualizationVirtualMachinesReadPathParams;
}


export class VirtualizationVirtualMachinesReadResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  virtualMachineWithConfigContext?: shared.VirtualMachineWithConfigContext;
}
