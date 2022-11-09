import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class PostPatientsIdAttachmentsNameCompressPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=name" })
  name: string;
}


export class PostPatientsIdAttachmentsNameCompressRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: PostPatientsIdAttachmentsNameCompressPathParams;
}


export class PostPatientsIdAttachmentsNameCompressResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
