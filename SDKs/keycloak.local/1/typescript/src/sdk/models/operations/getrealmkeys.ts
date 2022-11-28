import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetRealmKeysPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=realm" })
  realm: string;
}


export class GetRealmKeysRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetRealmKeysPathParams;
}


export class GetRealmKeysResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  keysMetadataRepresentation?: shared.KeysMetadataRepresentation;

  @SpeakeasyMetadata()
  statusCode: number;
}
