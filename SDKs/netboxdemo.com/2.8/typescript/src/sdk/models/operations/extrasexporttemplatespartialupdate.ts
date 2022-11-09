import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class ExtrasExportTemplatesPartialUpdatePathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: number;
}


export class ExtrasExportTemplatesPartialUpdateRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: ExtrasExportTemplatesPartialUpdatePathParams;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.WritableExportTemplate;
}


export class ExtrasExportTemplatesPartialUpdateResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  exportTemplate?: shared.ExportTemplate;

  @Metadata()
  statusCode: number;
}
