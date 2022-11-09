import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class DcimInventoryItemsDeletePathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: number;
}


export class DcimInventoryItemsDeleteRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: DcimInventoryItemsDeletePathParams;
}


export class DcimInventoryItemsDeleteResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
