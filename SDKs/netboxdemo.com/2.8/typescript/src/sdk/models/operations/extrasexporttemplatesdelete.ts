import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class ExtrasExportTemplatesDeletePathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: number;
}


export class ExtrasExportTemplatesDeleteRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: ExtrasExportTemplatesDeletePathParams;
}


export class ExtrasExportTemplatesDeleteResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
