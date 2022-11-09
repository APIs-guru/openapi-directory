import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class TenancyChoicesReadPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;
}


export class TenancyChoicesReadRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: TenancyChoicesReadPathParams;
}


export class TenancyChoicesReadResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
