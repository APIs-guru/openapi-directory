import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class AquifersNamesListQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=search" })
  search?: string;
}


export class AquifersNamesListRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: AquifersNamesListQueryParams;
}


export class AquifersNamesListResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ elemType: shared.AquiferSerializerBasic })
  aquiferSerializerBasics?: shared.AquiferSerializerBasic[];

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
