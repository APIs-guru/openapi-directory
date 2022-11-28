import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class VirtualizationVirtualMachinesDeletePathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: number;
}


export class VirtualizationVirtualMachinesDeleteRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: VirtualizationVirtualMachinesDeletePathParams;
}


export class VirtualizationVirtualMachinesDeleteResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
