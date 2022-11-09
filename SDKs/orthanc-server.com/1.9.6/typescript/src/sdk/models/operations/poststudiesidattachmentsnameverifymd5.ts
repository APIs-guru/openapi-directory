import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class PostStudiesIdAttachmentsNameVerifyMd5PathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=name" })
  name: string;
}


export class PostStudiesIdAttachmentsNameVerifyMd5Request extends SpeakeasyBase {
  @Metadata()
  pathParams: PostStudiesIdAttachmentsNameVerifyMd5PathParams;
}


export class PostStudiesIdAttachmentsNameVerifyMd5Response extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  postStudiesIdAttachmentsNameVerifyMd5200ApplicationJsonAny?: any;

  @Metadata()
  statusCode: number;
}
