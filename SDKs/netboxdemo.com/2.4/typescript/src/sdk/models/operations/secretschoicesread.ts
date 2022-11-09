import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class SecretsChoicesReadPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;
}


export class SecretsChoicesReadRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: SecretsChoicesReadPathParams;
}


export class SecretsChoicesReadResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
