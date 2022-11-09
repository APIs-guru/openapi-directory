import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class DeletebulkDataExporterConfigSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=http;subtype=basic" })
  otoroshiAuth: shared.SchemeOtoroshiAuth;
}


export class DeletebulkDataExporterConfigRequest extends SpeakeasyBase {
  @Metadata({ data: "request, media_type=application/ndjson", elemType: shared.Patch })
  request?: shared.Patch[];

  @Metadata()
  security: DeletebulkDataExporterConfigSecurity;
}

export enum DeletebulkDataExporterConfig200ApplicationJsonStatusEnum {
    TwoHundred = "200"
}


// DeletebulkDataExporterConfig200ApplicationJson
/** 
 * The bulk response
**/
export class DeletebulkDataExporterConfig200ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=deleted" })
  deleted?: boolean;

  @Metadata({ data: "json, name=id" })
  id?: boolean;

  @Metadata({ data: "json, name=status" })
  status?: DeletebulkDataExporterConfig200ApplicationJsonStatusEnum;
}


export class DeletebulkDataExporterConfigResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata({ elemType: operations.DeletebulkDataExporterConfig200ApplicationJson })
  deletebulkDataExporterConfig200ApplicationJsonObjects?: DeletebulkDataExporterConfig200ApplicationJson[];
}
