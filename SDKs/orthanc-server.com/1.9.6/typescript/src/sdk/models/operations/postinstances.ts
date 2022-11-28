import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class PostInstancesRequests extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "request, media_type=application/dicom" })
  applicationDicom: Uint8Array;

  @SpeakeasyMetadata({ data: "request, media_type=application/zip" })
  applicationZip: Uint8Array;
}


export class PostInstancesRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  request?: PostInstancesRequests;
}


export class PostInstancesResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  postInstances200ApplicationJsonAny?: any;

  @SpeakeasyMetadata()
  statusCode: number;
}
