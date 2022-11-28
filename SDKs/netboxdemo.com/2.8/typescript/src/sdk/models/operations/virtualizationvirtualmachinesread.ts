import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class VirtualizationVirtualMachinesReadPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: number;
}


export class VirtualizationVirtualMachinesReadRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: VirtualizationVirtualMachinesReadPathParams;
}


export class VirtualizationVirtualMachinesReadResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  virtualMachineWithConfigContext?: shared.VirtualMachineWithConfigContext;
}
