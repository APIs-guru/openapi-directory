import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetRealmPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=realm" })
  realm: string;
}


export class GetRealmRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetRealmPathParams;
}


export class GetRealmResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  realmRepresentation?: shared.RealmRepresentation;

  @Metadata()
  statusCode: number;
}
