import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GetMultiPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=address" })
  address: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=baudrate" })
  baudrate: number;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=device" })
  device: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=maxframes" })
  maxframes: number;
}


export class GetMultiRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetMultiPathParams;
}


export class GetMultiResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  mbusData?: string;

  @Metadata()
  textError?: string;
}
