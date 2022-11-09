import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class LandlordControllerGetLandlordCrmEntriesPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=shortName" })
  shortName: string;
}


export class LandlordControllerGetLandlordCrmEntriesQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=token" })
  token: string;
}


export class LandlordControllerGetLandlordCrmEntriesRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: LandlordControllerGetLandlordCrmEntriesPathParams;

  @Metadata()
  queryParams: LandlordControllerGetLandlordCrmEntriesQueryParams;
}


export class LandlordControllerGetLandlordCrmEntriesResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata({ elemType: shared.LandlordCrmEntry })
  landlordCrmEntries?: shared.LandlordCrmEntry[];

  @Metadata()
  statusCode: number;
}
