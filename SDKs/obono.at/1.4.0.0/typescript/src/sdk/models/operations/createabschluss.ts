import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class CreateAbschlussPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=registrierkasseUuid" })
  registrierkasseUuid: string;
}


export class CreateAbschlussRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: CreateAbschlussPathParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: shared.Abschlussbelegdaten;
}


export class CreateAbschlussResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  headers: Map<string, string[]>;

  @SpeakeasyMetadata()
  statusCode: number;
}
