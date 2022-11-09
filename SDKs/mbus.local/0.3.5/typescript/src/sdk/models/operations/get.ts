import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GetPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=address" })
  address: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=baudrate" })
  baudrate: number;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=device" })
  device: string;
}


export class GetRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetPathParams;
}


export class GetResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  mbusData?: string;

  @Metadata()
  textError?: string;
}
