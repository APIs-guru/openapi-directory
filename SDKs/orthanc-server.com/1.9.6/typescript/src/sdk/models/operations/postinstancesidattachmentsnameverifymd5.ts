import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class PostInstancesIdAttachmentsNameVerifyMd5PathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=name" })
  name: string;
}


export class PostInstancesIdAttachmentsNameVerifyMd5Request extends SpeakeasyBase {
  @Metadata()
  pathParams: PostInstancesIdAttachmentsNameVerifyMd5PathParams;
}


export class PostInstancesIdAttachmentsNameVerifyMd5Response extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  postInstancesIdAttachmentsNameVerifyMd5200ApplicationJsonAny?: any;

  @Metadata()
  statusCode: number;
}
