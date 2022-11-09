import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class ExtrasExportTemplatesReadPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: number;
}


export class ExtrasExportTemplatesReadRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: ExtrasExportTemplatesReadPathParams;
}


export class ExtrasExportTemplatesReadResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  exportTemplate?: shared.ExportTemplate;

  @Metadata()
  statusCode: number;
}
