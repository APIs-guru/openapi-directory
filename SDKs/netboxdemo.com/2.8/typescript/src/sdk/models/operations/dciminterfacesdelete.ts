import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class DcimInterfacesDeletePathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: number;
}


export class DcimInterfacesDeleteRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: DcimInterfacesDeletePathParams;
}


export class DcimInterfacesDeleteResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
