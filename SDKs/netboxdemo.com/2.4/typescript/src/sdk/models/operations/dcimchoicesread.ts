import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class DcimChoicesReadPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;
}


export class DcimChoicesReadRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: DcimChoicesReadPathParams;
}


export class DcimChoicesReadResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
