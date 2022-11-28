import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class ExtrasChoicesReadPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;
}


export class ExtrasChoicesReadRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: ExtrasChoicesReadPathParams;
}


export class ExtrasChoicesReadResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
