import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class DeletebulkDataExporterConfigSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=basic" })
  otoroshiAuth: shared.SchemeOtoroshiAuth;
}

export enum DeletebulkDataExporterConfig200ApplicationJsonStatusEnum {
    TwoHundred = "200"
}


// DeletebulkDataExporterConfig200ApplicationJson
/** 
 * The bulk response
**/
export class DeletebulkDataExporterConfig200ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=deleted" })
  deleted?: boolean;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: boolean;

  @SpeakeasyMetadata({ data: "json, name=status" })
  status?: DeletebulkDataExporterConfig200ApplicationJsonStatusEnum;
}


export class DeletebulkDataExporterConfigRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "request, media_type=application/ndjson", elemType: shared.Patch })
  request?: shared.Patch[];

  @SpeakeasyMetadata()
  security: DeletebulkDataExporterConfigSecurity;
}


export class DeletebulkDataExporterConfigResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata({ elemType: DeletebulkDataExporterConfig200ApplicationJson })
  deletebulkDataExporterConfig200ApplicationJsonObjects?: DeletebulkDataExporterConfig200ApplicationJson[];
}
