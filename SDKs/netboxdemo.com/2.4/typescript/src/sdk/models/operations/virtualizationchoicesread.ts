import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class VirtualizationChoicesReadPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;
}


export class VirtualizationChoicesReadRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: VirtualizationChoicesReadPathParams;
}


export class VirtualizationChoicesReadResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
