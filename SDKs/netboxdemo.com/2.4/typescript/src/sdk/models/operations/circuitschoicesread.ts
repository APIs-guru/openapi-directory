import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class CircuitsChoicesReadPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;
}


export class CircuitsChoicesReadRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: CircuitsChoicesReadPathParams;
}


export class CircuitsChoicesReadResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
