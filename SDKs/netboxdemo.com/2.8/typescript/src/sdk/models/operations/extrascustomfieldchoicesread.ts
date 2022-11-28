import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class ExtrasCustomFieldChoicesReadPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;
}


export class ExtrasCustomFieldChoicesReadRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: ExtrasCustomFieldChoicesReadPathParams;
}


export class ExtrasCustomFieldChoicesReadResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
