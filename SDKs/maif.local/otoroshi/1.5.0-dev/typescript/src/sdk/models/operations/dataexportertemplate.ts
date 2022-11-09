import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class DataExporterTemplateQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=type" })
  type?: string;
}


export class DataExporterTemplateSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=http;subtype=basic" })
  otoroshiAuth: shared.SchemeOtoroshiAuth;
}


export class DataExporterTemplateRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: DataExporterTemplateQueryParams;

  @Metadata()
  security: DataExporterTemplateSecurity;
}


export class DataExporterTemplateResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  dataExporterConfig?: shared.DataExporterConfig;

  @Metadata()
  statusCode: number;
}
