import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class CircuitsChoicesReadPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;
}


export class CircuitsChoicesReadRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: CircuitsChoicesReadPathParams;
}


export class CircuitsChoicesReadResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
