import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GetIsosIdPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: number;
}


export class GetIsosIdRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetIsosIdPathParams;
}

export enum GetIsosId200ApplicationJsonIsoTypeEnum {
    Public = "public"
,    Private = "private"
}


export class GetIsosId200ApplicationJsonIso extends SpeakeasyBase {
  @Metadata({ data: "json, name=deprecated" })
  deprecated: string;

  @Metadata({ data: "json, name=description" })
  description: string;

  @Metadata({ data: "json, name=id" })
  id: number;

  @Metadata({ data: "json, name=name" })
  name: string;

  @Metadata({ data: "json, name=type" })
  type: GetIsosId200ApplicationJsonIsoTypeEnum;
}


export class GetIsosId200ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=iso" })
  iso: GetIsosId200ApplicationJsonIso;
}


export class GetIsosIdResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  getIsosId200ApplicationJsonObject?: GetIsosId200ApplicationJson;

  @Metadata()
  statusCode: number;
}
