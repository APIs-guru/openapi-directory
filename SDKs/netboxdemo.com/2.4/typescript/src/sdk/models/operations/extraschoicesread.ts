import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class ExtrasChoicesReadPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;
}


export class ExtrasChoicesReadRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: ExtrasChoicesReadPathParams;
}


export class ExtrasChoicesReadResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
