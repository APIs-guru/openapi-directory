import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetRealmKeysPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=realm" })
  realm: string;
}


export class GetRealmKeysRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetRealmKeysPathParams;
}


export class GetRealmKeysResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  keysMetadataRepresentation?: shared.KeysMetadataRepresentation;

  @Metadata()
  statusCode: number;
}
