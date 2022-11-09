import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class VirtualizationVirtualMachinesDeletePathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: number;
}


export class VirtualizationVirtualMachinesDeleteRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: VirtualizationVirtualMachinesDeletePathParams;
}


export class VirtualizationVirtualMachinesDeleteResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
