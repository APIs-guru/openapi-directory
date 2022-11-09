import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class UpdateBulkDataExporterConfigSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=http;subtype=basic" })
  otoroshiAuth: shared.SchemeOtoroshiAuth;
}


export class UpdateBulkDataExporterConfigRequest extends SpeakeasyBase {
  @Metadata({ data: "request, media_type=application/ndjson" })
  request?: shared.DataExporterConfig;

  @Metadata()
  security: UpdateBulkDataExporterConfigSecurity;
}

export enum UpdateBulkDataExporterConfig200ApplicationJsonStatusEnum {
    TwoHundred = "200"
}


// UpdateBulkDataExporterConfig200ApplicationJson
/** 
 * The bulk response
**/
export class UpdateBulkDataExporterConfig200ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=id" })
  id?: boolean;

  @Metadata({ data: "json, name=status" })
  status?: UpdateBulkDataExporterConfig200ApplicationJsonStatusEnum;

  @Metadata({ data: "json, name=updated" })
  updated?: boolean;
}


export class UpdateBulkDataExporterConfigResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata({ elemType: operations.UpdateBulkDataExporterConfig200ApplicationJson })
  updateBulkDataExporterConfig200ApplicationJsonObjects?: UpdateBulkDataExporterConfig200ApplicationJson[];
}
