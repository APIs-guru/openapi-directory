import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class UpdateBulkDataExporterConfigSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=basic" })
  otoroshiAuth: shared.SchemeOtoroshiAuth;
}

export enum UpdateBulkDataExporterConfig200ApplicationJsonStatusEnum {
    TwoHundred = "200"
}


// UpdateBulkDataExporterConfig200ApplicationJson
/** 
 * The bulk response
**/
export class UpdateBulkDataExporterConfig200ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: boolean;

  @SpeakeasyMetadata({ data: "json, name=status" })
  status?: UpdateBulkDataExporterConfig200ApplicationJsonStatusEnum;

  @SpeakeasyMetadata({ data: "json, name=updated" })
  updated?: boolean;
}


export class UpdateBulkDataExporterConfigRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "request, media_type=application/ndjson" })
  request?: shared.DataExporterConfig;

  @SpeakeasyMetadata()
  security: UpdateBulkDataExporterConfigSecurity;
}


export class UpdateBulkDataExporterConfigResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata({ elemType: UpdateBulkDataExporterConfig200ApplicationJson })
  updateBulkDataExporterConfig200ApplicationJsonObjects?: UpdateBulkDataExporterConfig200ApplicationJson[];
}
