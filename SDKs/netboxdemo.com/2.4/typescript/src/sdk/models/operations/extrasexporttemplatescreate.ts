import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class ExtrasExportTemplatesCreateRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: shared.ExportTemplateInput;
}


export class ExtrasExportTemplatesCreateResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  exportTemplate?: shared.ExportTemplate;

  @SpeakeasyMetadata()
  statusCode: number;
}
