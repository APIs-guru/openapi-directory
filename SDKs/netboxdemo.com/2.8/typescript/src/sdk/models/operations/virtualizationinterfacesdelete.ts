import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class VirtualizationInterfacesDeletePathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: number;
}


export class VirtualizationInterfacesDeleteRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: VirtualizationInterfacesDeletePathParams;
}


export class VirtualizationInterfacesDeleteResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
