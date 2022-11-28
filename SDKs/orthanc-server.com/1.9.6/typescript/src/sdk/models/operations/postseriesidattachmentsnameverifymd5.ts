import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class PostSeriesIdAttachmentsNameVerifyMd5PathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=name" })
  name: string;
}


export class PostSeriesIdAttachmentsNameVerifyMd5Request extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: PostSeriesIdAttachmentsNameVerifyMd5PathParams;
}


export class PostSeriesIdAttachmentsNameVerifyMd5Response extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  postSeriesIdAttachmentsNameVerifyMd5200ApplicationJsonAny?: any;

  @SpeakeasyMetadata()
  statusCode: number;
}
