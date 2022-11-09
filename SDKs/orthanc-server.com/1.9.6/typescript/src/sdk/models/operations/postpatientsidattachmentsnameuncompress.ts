import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class PostPatientsIdAttachmentsNameUncompressPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=name" })
  name: string;
}


export class PostPatientsIdAttachmentsNameUncompressRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: PostPatientsIdAttachmentsNameUncompressPathParams;
}


export class PostPatientsIdAttachmentsNameUncompressResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
