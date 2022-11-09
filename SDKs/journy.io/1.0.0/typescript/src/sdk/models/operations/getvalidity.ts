import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// GetValidity200ApplicationJsonData
/** 
 * Validation of API Key
**/
export class GetValidity200ApplicationJsonData extends SpeakeasyBase {
  @Metadata({ data: "json, name=permissions" })
  permissions: string[];
}


export class GetValidity200ApplicationJsonMeta extends SpeakeasyBase {
  @Metadata({ data: "json, name=requestId" })
  requestId: string;

  @Metadata({ data: "json, name=status" })
  status: number;
}


export class GetValidity200ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=data" })
  data: GetValidity200ApplicationJsonData;

  @Metadata({ data: "json, name=meta" })
  meta: GetValidity200ApplicationJsonMeta;
}


export class GetValidity401ApplicationJsonMeta extends SpeakeasyBase {
  @Metadata({ data: "json, name=requestId" })
  requestId: string;

  @Metadata({ data: "json, name=status" })
  status: number;
}


export class GetValidity401ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=message" })
  message: string;

  @Metadata({ data: "json, name=meta" })
  meta: GetValidity401ApplicationJsonMeta;
}


export class GetValidity403ApplicationJsonMeta extends SpeakeasyBase {
  @Metadata({ data: "json, name=requestId" })
  requestId: string;

  @Metadata({ data: "json, name=status" })
  status: number;
}


export class GetValidity403ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=message" })
  message: string;

  @Metadata({ data: "json, name=meta" })
  meta: GetValidity403ApplicationJsonMeta;
}


export class GetValidity429ApplicationJsonMeta extends SpeakeasyBase {
  @Metadata({ data: "json, name=requestId" })
  requestId: string;

  @Metadata({ data: "json, name=status" })
  status: number;
}


export class GetValidity429ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=message" })
  message: string;

  @Metadata({ data: "json, name=meta" })
  meta: GetValidity429ApplicationJsonMeta;
}


export class GetValidity500ApplicationJsonMeta extends SpeakeasyBase {
  @Metadata({ data: "json, name=requestId" })
  requestId: string;

  @Metadata({ data: "json, name=status" })
  status: number;
}


export class GetValidity500ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=message" })
  message: string;

  @Metadata({ data: "json, name=meta" })
  meta: GetValidity500ApplicationJsonMeta;
}


export class GetValidityResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  headers: Map<string, string[]>;

  @Metadata()
  statusCode: number;

  @Metadata()
  getValidity200ApplicationJsonObject?: GetValidity200ApplicationJson;

  @Metadata()
  getValidity401ApplicationJsonObject?: GetValidity401ApplicationJson;

  @Metadata()
  getValidity403ApplicationJsonObject?: GetValidity403ApplicationJson;

  @Metadata()
  getValidity429ApplicationJsonObject?: GetValidity429ApplicationJson;

  @Metadata()
  getValidity500ApplicationJsonObject?: GetValidity500ApplicationJson;
}
