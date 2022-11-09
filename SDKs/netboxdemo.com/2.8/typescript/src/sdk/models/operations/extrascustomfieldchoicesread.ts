import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class ExtrasCustomFieldChoicesReadPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;
}


export class ExtrasCustomFieldChoicesReadRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: ExtrasCustomFieldChoicesReadPathParams;
}


export class ExtrasCustomFieldChoicesReadResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
