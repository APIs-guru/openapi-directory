import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class ExtrasImageAttachmentsDeletePathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: number;
}


export class ExtrasImageAttachmentsDeleteRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: ExtrasImageAttachmentsDeletePathParams;
}


export class ExtrasImageAttachmentsDeleteResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
