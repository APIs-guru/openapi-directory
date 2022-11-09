import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class ProductsApiSaveRequest extends SpeakeasyBase {
  @Metadata({ data: "request, media_type=application/json" })
  request: any;
}


export class ProductsApiSaveResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  productsApiSave201ApplicationJsonOneOf?: any;

  @Metadata()
  statusCode: number;
}
