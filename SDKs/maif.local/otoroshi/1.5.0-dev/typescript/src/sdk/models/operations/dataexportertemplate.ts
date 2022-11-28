import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class DataExporterTemplateQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=type" })
  type?: string;
}


export class DataExporterTemplateSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=basic" })
  otoroshiAuth: shared.SchemeOtoroshiAuth;
}


export class DataExporterTemplateRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: DataExporterTemplateQueryParams;

  @SpeakeasyMetadata()
  security: DataExporterTemplateSecurity;
}


export class DataExporterTemplateResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  dataExporterConfig?: shared.DataExporterConfig;

  @SpeakeasyMetadata()
  statusCode: number;
}
