import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class DcimFrontPortTemplatesDeletePathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: number;
}


export class DcimFrontPortTemplatesDeleteRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: DcimFrontPortTemplatesDeletePathParams;
}


export class DcimFrontPortTemplatesDeleteResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
