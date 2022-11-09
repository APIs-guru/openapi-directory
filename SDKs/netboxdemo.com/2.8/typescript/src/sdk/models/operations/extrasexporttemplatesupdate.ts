import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class ExtrasExportTemplatesUpdatePathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: number;
}


export class ExtrasExportTemplatesUpdateRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: ExtrasExportTemplatesUpdatePathParams;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.WritableExportTemplate;
}


export class ExtrasExportTemplatesUpdateResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  exportTemplate?: shared.ExportTemplate;

  @Metadata()
  statusCode: number;
}
