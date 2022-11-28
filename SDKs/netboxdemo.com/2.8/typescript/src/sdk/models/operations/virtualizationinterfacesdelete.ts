import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class VirtualizationInterfacesDeletePathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: number;
}


export class VirtualizationInterfacesDeleteRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: VirtualizationInterfacesDeletePathParams;
}


export class VirtualizationInterfacesDeleteResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
