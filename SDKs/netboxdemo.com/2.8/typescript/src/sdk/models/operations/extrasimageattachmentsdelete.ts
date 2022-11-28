import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class ExtrasImageAttachmentsDeletePathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: number;
}


export class ExtrasImageAttachmentsDeleteRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: ExtrasImageAttachmentsDeletePathParams;
}


export class ExtrasImageAttachmentsDeleteResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
