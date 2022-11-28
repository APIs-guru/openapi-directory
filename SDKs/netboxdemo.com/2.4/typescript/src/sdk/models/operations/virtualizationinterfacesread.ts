import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class VirtualizationInterfacesReadPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: number;
}


export class VirtualizationInterfacesReadRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: VirtualizationInterfacesReadPathParams;
}


export class VirtualizationInterfacesReadResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  interface?: shared.Interface;

  @SpeakeasyMetadata()
  statusCode: number;
}
