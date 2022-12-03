import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class Get200ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=message" })
  message?: string;
}


export class GetResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  get200ApplicationJsonObject?: Get200ApplicationJson;
}
