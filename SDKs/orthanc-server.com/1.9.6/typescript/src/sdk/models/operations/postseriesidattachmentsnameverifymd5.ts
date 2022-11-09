import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class PostSeriesIdAttachmentsNameVerifyMd5PathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=name" })
  name: string;
}


export class PostSeriesIdAttachmentsNameVerifyMd5Request extends SpeakeasyBase {
  @Metadata()
  pathParams: PostSeriesIdAttachmentsNameVerifyMd5PathParams;
}


export class PostSeriesIdAttachmentsNameVerifyMd5Response extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  postSeriesIdAttachmentsNameVerifyMd5200ApplicationJsonAny?: any;

  @Metadata()
  statusCode: number;
}
