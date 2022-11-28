import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class TenancyChoicesReadPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;
}


export class TenancyChoicesReadRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: TenancyChoicesReadPathParams;
}


export class TenancyChoicesReadResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
