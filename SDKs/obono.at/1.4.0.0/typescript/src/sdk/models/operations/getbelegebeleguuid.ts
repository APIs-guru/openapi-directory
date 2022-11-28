import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetBelegeBelegUuidPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=belegUuid" })
  belegUuid: string;
}


export class GetBelegeBelegUuidRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetBelegeBelegUuidPathParams;
}


export class GetBelegeBelegUuidResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  beleg?: shared.Beleg;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
