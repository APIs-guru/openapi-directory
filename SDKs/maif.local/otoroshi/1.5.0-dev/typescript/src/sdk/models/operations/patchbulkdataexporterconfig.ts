import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class PatchBulkDataExporterConfigSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=http;subtype=basic" })
  otoroshiAuth: shared.SchemeOtoroshiAuth;
}


export class PatchBulkDataExporterConfigRequest extends SpeakeasyBase {
  @Metadata({ data: "request, media_type=application/ndjson", elemType: shared.Patch })
  request?: shared.Patch[];

  @Metadata()
  security: PatchBulkDataExporterConfigSecurity;
}

export enum PatchBulkDataExporterConfig200ApplicationJsonStatusEnum {
    TwoHundred = "200"
}


// PatchBulkDataExporterConfig200ApplicationJson
/** 
 * The bulk response
**/
export class PatchBulkDataExporterConfig200ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=id" })
  id?: boolean;

  @Metadata({ data: "json, name=status" })
  status?: PatchBulkDataExporterConfig200ApplicationJsonStatusEnum;

  @Metadata({ data: "json, name=updated" })
  updated?: boolean;
}


export class PatchBulkDataExporterConfigResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata({ elemType: operations.PatchBulkDataExporterConfig200ApplicationJson })
  patchBulkDataExporterConfig200ApplicationJsonObjects?: PatchBulkDataExporterConfig200ApplicationJson[];
}
