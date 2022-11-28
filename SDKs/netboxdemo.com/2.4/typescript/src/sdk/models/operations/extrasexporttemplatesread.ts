import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class ExtrasExportTemplatesReadPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: number;
}


export class ExtrasExportTemplatesReadRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: ExtrasExportTemplatesReadPathParams;
}


export class ExtrasExportTemplatesReadResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  exportTemplate?: shared.ExportTemplate;

  @SpeakeasyMetadata()
  statusCode: number;
}
