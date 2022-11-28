import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// GetValidity200ApplicationJsonData
/** 
 * Validation of API Key
**/
export class GetValidity200ApplicationJsonData extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=permissions" })
  permissions: string[];
}


export class GetValidity200ApplicationJsonMeta extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=requestId" })
  requestId: string;

  @SpeakeasyMetadata({ data: "json, name=status" })
  status: number;
}


export class GetValidity200ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=data" })
  data: GetValidity200ApplicationJsonData;

  @SpeakeasyMetadata({ data: "json, name=meta" })
  meta: GetValidity200ApplicationJsonMeta;
}


export class GetValidity401ApplicationJsonMeta extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=requestId" })
  requestId: string;

  @SpeakeasyMetadata({ data: "json, name=status" })
  status: number;
}


export class GetValidity401ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=message" })
  message: string;

  @SpeakeasyMetadata({ data: "json, name=meta" })
  meta: GetValidity401ApplicationJsonMeta;
}


export class GetValidity403ApplicationJsonMeta extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=requestId" })
  requestId: string;

  @SpeakeasyMetadata({ data: "json, name=status" })
  status: number;
}


export class GetValidity403ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=message" })
  message: string;

  @SpeakeasyMetadata({ data: "json, name=meta" })
  meta: GetValidity403ApplicationJsonMeta;
}


export class GetValidity429ApplicationJsonMeta extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=requestId" })
  requestId: string;

  @SpeakeasyMetadata({ data: "json, name=status" })
  status: number;
}


export class GetValidity429ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=message" })
  message: string;

  @SpeakeasyMetadata({ data: "json, name=meta" })
  meta: GetValidity429ApplicationJsonMeta;
}


export class GetValidity500ApplicationJsonMeta extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=requestId" })
  requestId: string;

  @SpeakeasyMetadata({ data: "json, name=status" })
  status: number;
}


export class GetValidity500ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=message" })
  message: string;

  @SpeakeasyMetadata({ data: "json, name=meta" })
  meta: GetValidity500ApplicationJsonMeta;
}


export class GetValidityResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  headers: Map<string, string[]>;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  getValidity200ApplicationJsonObject?: GetValidity200ApplicationJson;

  @SpeakeasyMetadata()
  getValidity401ApplicationJsonObject?: GetValidity401ApplicationJson;

  @SpeakeasyMetadata()
  getValidity403ApplicationJsonObject?: GetValidity403ApplicationJson;

  @SpeakeasyMetadata()
  getValidity429ApplicationJsonObject?: GetValidity429ApplicationJson;

  @SpeakeasyMetadata()
  getValidity500ApplicationJsonObject?: GetValidity500ApplicationJson;
}
