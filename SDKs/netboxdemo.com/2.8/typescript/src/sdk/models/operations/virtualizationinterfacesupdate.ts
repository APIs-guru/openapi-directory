import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class VirtualizationInterfacesUpdatePathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: number;
}


export class VirtualizationInterfacesUpdateRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: VirtualizationInterfacesUpdatePathParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: shared.WritableVirtualMachineInterfaceInput;
}


export class VirtualizationInterfacesUpdateResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  virtualMachineInterface?: shared.VirtualMachineInterface;
}
