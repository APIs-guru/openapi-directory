import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class DcimInterfaceTemplatesDeletePathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: number;
}


export class DcimInterfaceTemplatesDeleteRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: DcimInterfaceTemplatesDeletePathParams;
}


export class DcimInterfaceTemplatesDeleteResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
