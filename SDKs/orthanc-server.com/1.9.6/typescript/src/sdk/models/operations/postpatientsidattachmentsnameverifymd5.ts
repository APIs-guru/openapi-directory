import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class PostPatientsIdAttachmentsNameVerifyMd5PathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=name" })
  name: string;
}


export class PostPatientsIdAttachmentsNameVerifyMd5Request extends SpeakeasyBase {
  @Metadata()
  pathParams: PostPatientsIdAttachmentsNameVerifyMd5PathParams;
}


export class PostPatientsIdAttachmentsNameVerifyMd5Response extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  postPatientsIdAttachmentsNameVerifyMd5200ApplicationJsonAny?: any;

  @Metadata()
  statusCode: number;
}
