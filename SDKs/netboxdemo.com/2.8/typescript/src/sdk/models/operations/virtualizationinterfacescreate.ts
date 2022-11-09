import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class VirtualizationInterfacesCreateRequest extends SpeakeasyBase {
  @Metadata({ data: "request, media_type=application/json" })
  request: shared.WritableVirtualMachineInterface;
}


export class VirtualizationInterfacesCreateResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  virtualMachineInterface?: shared.VirtualMachineInterface;
}
