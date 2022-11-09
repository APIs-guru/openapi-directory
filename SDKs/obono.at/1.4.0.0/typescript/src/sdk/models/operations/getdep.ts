import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GetDepPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=registrierkasseUuid" })
  registrierkasseUuid: string;
}


export class GetDepRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetDepPathParams;
}


export class GetDepResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
