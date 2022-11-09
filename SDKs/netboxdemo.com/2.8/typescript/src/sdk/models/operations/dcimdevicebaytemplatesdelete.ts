import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class DcimDeviceBayTemplatesDeletePathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: number;
}


export class DcimDeviceBayTemplatesDeleteRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: DcimDeviceBayTemplatesDeletePathParams;
}


export class DcimDeviceBayTemplatesDeleteResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
