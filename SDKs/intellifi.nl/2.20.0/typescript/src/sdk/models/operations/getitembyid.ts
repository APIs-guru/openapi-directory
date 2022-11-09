import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetItemByIdPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;
}


export class GetItemByIdRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetItemByIdPathParams;
}


export class GetItemByIdResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  item?: shared.Item;

  @Metadata()
  statusCode: number;
}
