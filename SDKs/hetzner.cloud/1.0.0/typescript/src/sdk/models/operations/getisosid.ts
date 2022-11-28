import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GetIsosIdPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: number;
}

export enum GetIsosId200ApplicationJsonIsoTypeEnum {
    Public = "public",
    Private = "private"
}


export class GetIsosId200ApplicationJsonIso extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=deprecated" })
  deprecated: string;

  @SpeakeasyMetadata({ data: "json, name=description" })
  description: string;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id: number;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name: string;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type: GetIsosId200ApplicationJsonIsoTypeEnum;
}


export class GetIsosId200ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=iso" })
  iso: GetIsosId200ApplicationJsonIso;
}


export class GetIsosIdRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetIsosIdPathParams;
}


export class GetIsosIdResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  getIsosId200ApplicationJsonObject?: GetIsosId200ApplicationJson;

  @SpeakeasyMetadata()
  statusCode: number;
}
