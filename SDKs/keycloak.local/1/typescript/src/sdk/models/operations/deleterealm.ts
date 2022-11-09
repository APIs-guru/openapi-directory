import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class DeleteRealmPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=realm" })
  realm: string;
}


export class DeleteRealmRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: DeleteRealmPathParams;
}


export class DeleteRealmResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
