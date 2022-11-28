import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class SecretsChoicesReadPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;
}


export class SecretsChoicesReadRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: SecretsChoicesReadPathParams;
}


export class SecretsChoicesReadResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
