import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetBelegeBelegUuidPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=belegUuid" })
  belegUuid: string;
}


export class GetBelegeBelegUuidRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetBelegeBelegUuidPathParams;
}


export class GetBelegeBelegUuidResponse extends SpeakeasyBase {
  @Metadata()
  beleg?: shared.Beleg;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
