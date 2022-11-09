import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class PostInstancesRequests extends SpeakeasyBase {
  @Metadata({ data: "request, media_type=application/dicom" })
  applicationDicom: Uint8Array;

  @Metadata({ data: "request, media_type=application/zip" })
  applicationZip: Uint8Array;
}


export class PostInstancesRequest extends SpeakeasyBase {
  @Metadata()
  request?: PostInstancesRequests;
}


export class PostInstancesResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  postInstances200ApplicationJsonAny?: any;

  @Metadata()
  statusCode: number;
}
