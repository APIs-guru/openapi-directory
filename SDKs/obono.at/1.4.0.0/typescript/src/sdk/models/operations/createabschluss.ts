import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class CreateAbschlussPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=registrierkasseUuid" })
  registrierkasseUuid: string;
}


export class CreateAbschlussRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: CreateAbschlussPathParams;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.Abschlussbelegdaten;
}


export class CreateAbschlussResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  headers: Map<string, string[]>;

  @Metadata()
  statusCode: number;
}
