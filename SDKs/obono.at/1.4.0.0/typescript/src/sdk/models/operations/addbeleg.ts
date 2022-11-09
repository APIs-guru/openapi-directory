import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class AddBelegPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=belegUuid" })
  belegUuid: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=registrierkasseUuid" })
  registrierkasseUuid: string;
}


export class AddBelegRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: AddBelegPathParams;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.Belegdaten;
}


export class AddBelegResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  headers: Map<string, string[]>;

  @Metadata()
  statusCode: number;
}
