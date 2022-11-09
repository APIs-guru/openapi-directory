import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetBelegPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=belegUuid" })
  belegUuid: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=registrierkasseUuid" })
  registrierkasseUuid: string;
}


export class GetBelegRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetBelegPathParams;
}


export class GetBelegResponse extends SpeakeasyBase {
  @Metadata()
  beleg?: shared.Beleg;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
