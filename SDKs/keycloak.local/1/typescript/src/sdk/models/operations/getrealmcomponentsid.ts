import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetRealmComponentsIdPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=realm" })
  realm: string;
}


export class GetRealmComponentsIdRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetRealmComponentsIdPathParams;
}


export class GetRealmComponentsIdResponse extends SpeakeasyBase {
  @Metadata()
  componentRepresentation?: shared.ComponentRepresentation;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
