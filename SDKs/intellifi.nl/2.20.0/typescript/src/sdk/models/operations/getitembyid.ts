import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetItemByIdPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;
}


export class GetItemByIdRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetItemByIdPathParams;
}


export class GetItemByIdResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  item?: shared.Item;

  @SpeakeasyMetadata()
  statusCode: number;
}
