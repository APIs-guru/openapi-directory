import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class ExtrasExportTemplatesCreateRequest extends SpeakeasyBase {
  @Metadata({ data: "request, media_type=application/json" })
  request: shared.WritableExportTemplate;
}


export class ExtrasExportTemplatesCreateResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  exportTemplate?: shared.ExportTemplate;

  @Metadata()
  statusCode: number;
}
