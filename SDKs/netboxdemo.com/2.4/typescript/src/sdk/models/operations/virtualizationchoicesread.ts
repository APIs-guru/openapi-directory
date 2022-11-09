import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class VirtualizationChoicesReadPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;
}


export class VirtualizationChoicesReadRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: VirtualizationChoicesReadPathParams;
}


export class VirtualizationChoicesReadResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
