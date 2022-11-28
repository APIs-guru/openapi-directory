import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class DcimInventoryItemsDeletePathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: number;
}


export class DcimInventoryItemsDeleteRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: DcimInventoryItemsDeletePathParams;
}


export class DcimInventoryItemsDeleteResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
