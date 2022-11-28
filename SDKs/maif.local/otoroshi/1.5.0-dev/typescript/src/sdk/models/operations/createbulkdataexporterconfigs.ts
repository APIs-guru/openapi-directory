import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class CreateBulkDataExporterConfigsSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=basic" })
  otoroshiAuth: shared.SchemeOtoroshiAuth;
}

export enum CreateBulkDataExporterConfigs200ApplicationJsonStatusEnum {
    TwoHundredAndOne = "201"
}


// CreateBulkDataExporterConfigs200ApplicationJson
/** 
 * The bulk response
**/
export class CreateBulkDataExporterConfigs200ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=created" })
  created?: boolean;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: boolean;

  @SpeakeasyMetadata({ data: "json, name=status" })
  status?: CreateBulkDataExporterConfigs200ApplicationJsonStatusEnum;
}


export class CreateBulkDataExporterConfigsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "request, media_type=application/ndjson" })
  request?: shared.DataExporterConfig;

  @SpeakeasyMetadata()
  security: CreateBulkDataExporterConfigsSecurity;
}


export class CreateBulkDataExporterConfigsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata({ elemType: CreateBulkDataExporterConfigs200ApplicationJson })
  createBulkDataExporterConfigs200ApplicationJsonObjects?: CreateBulkDataExporterConfigs200ApplicationJson[];
}
