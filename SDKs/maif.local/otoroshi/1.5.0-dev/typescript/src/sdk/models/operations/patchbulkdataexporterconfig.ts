import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class PatchBulkDataExporterConfigSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=basic" })
  otoroshiAuth: shared.SchemeOtoroshiAuth;
}

export enum PatchBulkDataExporterConfig200ApplicationJsonStatusEnum {
    TwoHundred = "200"
}


// PatchBulkDataExporterConfig200ApplicationJson
/** 
 * The bulk response
**/
export class PatchBulkDataExporterConfig200ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: boolean;

  @SpeakeasyMetadata({ data: "json, name=status" })
  status?: PatchBulkDataExporterConfig200ApplicationJsonStatusEnum;

  @SpeakeasyMetadata({ data: "json, name=updated" })
  updated?: boolean;
}


export class PatchBulkDataExporterConfigRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "request, media_type=application/ndjson", elemType: shared.Patch })
  request?: shared.Patch[];

  @SpeakeasyMetadata()
  security: PatchBulkDataExporterConfigSecurity;
}


export class PatchBulkDataExporterConfigResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata({ elemType: PatchBulkDataExporterConfig200ApplicationJson })
  patchBulkDataExporterConfig200ApplicationJsonObjects?: PatchBulkDataExporterConfig200ApplicationJson[];
}
