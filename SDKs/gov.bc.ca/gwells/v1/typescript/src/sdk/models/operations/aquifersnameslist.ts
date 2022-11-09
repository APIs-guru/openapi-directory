import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class AquifersNamesListQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=search" })
  search?: string;
}


export class AquifersNamesListRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: AquifersNamesListQueryParams;
}


export class AquifersNamesListResponse extends SpeakeasyBase {
  @Metadata({ elemType: shared.AquiferSerializerBasic })
  aquiferSerializerBasics?: shared.AquiferSerializerBasic[];

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
