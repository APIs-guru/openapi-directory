import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class PostPatientsIdAttachmentsNameCompressPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=name" })
  name: string;
}


export class PostPatientsIdAttachmentsNameCompressRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: PostPatientsIdAttachmentsNameCompressPathParams;
}


export class PostPatientsIdAttachmentsNameCompressResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
