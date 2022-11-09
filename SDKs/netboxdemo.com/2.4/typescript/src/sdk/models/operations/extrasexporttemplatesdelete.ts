import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class ExtrasExportTemplatesDeletePathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: number;
}


export class ExtrasExportTemplatesDeleteRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: ExtrasExportTemplatesDeletePathParams;
}


export class ExtrasExportTemplatesDeleteResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
