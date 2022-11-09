import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class CreateBulkDataExporterConfigsSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=http;subtype=basic" })
  otoroshiAuth: shared.SchemeOtoroshiAuth;
}


export class CreateBulkDataExporterConfigsRequest extends SpeakeasyBase {
  @Metadata({ data: "request, media_type=application/ndjson" })
  request?: shared.DataExporterConfig;

  @Metadata()
  security: CreateBulkDataExporterConfigsSecurity;
}

export enum CreateBulkDataExporterConfigs200ApplicationJsonStatusEnum {
    TwoHundredAndOne = "201"
}


// CreateBulkDataExporterConfigs200ApplicationJson
/** 
 * The bulk response
**/
export class CreateBulkDataExporterConfigs200ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=created" })
  created?: boolean;

  @Metadata({ data: "json, name=id" })
  id?: boolean;

  @Metadata({ data: "json, name=status" })
  status?: CreateBulkDataExporterConfigs200ApplicationJsonStatusEnum;
}


export class CreateBulkDataExporterConfigsResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata({ elemType: operations.CreateBulkDataExporterConfigs200ApplicationJson })
  createBulkDataExporterConfigs200ApplicationJsonObjects?: CreateBulkDataExporterConfigs200ApplicationJson[];
}
