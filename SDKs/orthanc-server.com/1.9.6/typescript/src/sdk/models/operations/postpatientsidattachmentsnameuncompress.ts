import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class PostPatientsIdAttachmentsNameUncompressPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=name" })
  name: string;
}


export class PostPatientsIdAttachmentsNameUncompressRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: PostPatientsIdAttachmentsNameUncompressPathParams;
}


export class PostPatientsIdAttachmentsNameUncompressResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
