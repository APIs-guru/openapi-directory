import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class DcimChoicesReadPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;
}


export class DcimChoicesReadRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: DcimChoicesReadPathParams;
}


export class DcimChoicesReadResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
