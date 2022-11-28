import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GetAttachmentPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=index" })
  index: number;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=mediaSourceId" })
  mediaSourceId: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=videoId" })
  videoId: string;
}


export class GetAttachmentRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetAttachmentPathParams;
}


export class GetAttachmentResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  getAttachment200ApplicationOctetStreamBinaryString?: Uint8Array;

  @SpeakeasyMetadata()
  problemDetails?: Map<string, any>;

  @SpeakeasyMetadata()
  statusCode: number;
}
